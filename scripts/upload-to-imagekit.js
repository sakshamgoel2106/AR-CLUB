const fs = require('fs');
const path = require('path');

const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
if (!PRIVATE_KEY) {
  console.error('IMAGEKIT_PRIVATE_KEY environment variable is required');
}
const AUTH_HEADER = 'Basic ' + Buffer.from((PRIVATE_KEY || '') + ':').toString('base64');

async function uploadFile(filePath, folder) {
  const fileName = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);
  const base64File = fileBuffer.toString('base64');

  const formData = new FormData();
  formData.append('file', base64File);
  formData.append('fileName', fileName);
  formData.append('folder', folder);
  formData.append('useUniqueFileName', 'false');
  formData.append('overwriteFile', 'true');

  try {
    const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': AUTH_HEADER
      },
      body: formData
    });

    const data = await res.json();
    if (!res.ok) {
      console.error(`Failed ${fileName}:`, data.message || data);
      return null;
    }
    console.log(`Uploaded ${folder}/${fileName} -> ${data.url}`);
    return data;
  } catch (err) {
    console.error(`Error uploading ${fileName}:`, err.message);
    return null;
  }
}

async function uploadDirectory(dirPath, folder) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isFile()) {
      await uploadFile(fullPath, folder);
    }
  }
}

async function main() {
  console.log('Uploading Team images...');
  await uploadDirectory(path.join(__dirname, '../frontend/public/team'), '/team');

  console.log('Uploading Gallery images...');
  await uploadDirectory(path.join(__dirname, '../frontend/public/gallery'), '/gallery');

  console.log('Uploading Events images...');
  await uploadDirectory(path.join(__dirname, '../frontend/public/events'), '/events');

  console.log('Upload finished!');
}

main().catch(console.error);
