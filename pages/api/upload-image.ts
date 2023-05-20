import { NextApiHandler } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

/*

   * 使用 formidable 庫來處理圖片上傳。
   * 並將圖片保存在 "public/uploads" 目錄中，並返回圖片的 URL。

*/


const handler: NextApiHandler = async (req, res) => {
    
  const form = new formidable.IncomingForm({ keepExtensions: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
      return;
    }
    const file = files.image as any;
    const extension = file.name.split('.').pop();
    const newFileName = `${uuidv4()}.${extension}`;
    const newPath = `${process.cwd()}/public/uploads/${newFileName}`;
    fs.copyFileSync(file.path, newPath);
    res.status(200).json({ url: `/uploads/${newFileName}` });
  });
};

export default handler;