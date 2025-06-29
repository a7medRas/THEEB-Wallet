
// سكريبت لجلب ABI من Etherscan
// تشغيله عبر node fetchABI.js بعد تثبيت axios
import axios from 'axios';
import fs from 'fs';

const apiKey = 'YOUR_ETHERSCAN_API_KEY'; // استبدل بمفتاح Etherscan الخاص بك
const contractAddress = '0x...';         // استبدل بعنوان عقد TBC الحقيقي

const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;

async function fetchABI() {
  try {
    const res = await axios.get(url);
    if (res.data.status !== "1") throw new Error("لم يتم العثور على ABI");

    const abi = JSON.parse(res.data.result);
    const content = \`// ABI لعقد TBC
export const contractAddress = "\${contractAddress}";
export const contractABI = \${JSON.stringify(abi, null, 2)};
\`;

    fs.writeFileSync('../docs/contractABI.js', content, 'utf8');
    console.log("✅ تم حفظ ABI بنجاح في docs/contractABI.js");
  } catch (err) {
    console.error("❌ خطأ:", err.message);
  }
}

fetchABI();
