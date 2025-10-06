<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "94b861de00829c34912ac36140f6183e",
  "translation_date": "2025-10-06T13:31:10+00:00",
  "source_file": "03-GettingStarted/README.md",
  "language_code": "ur"
}
-->
## شروع کریں  

[![اپنا پہلا MCP سرور بنائیں](../../../translated_images/04.0ea920069efd979a0b2dad51e72c1df7ead9c57b3305796068a6cee1f0dd6674.ur.png)](https://youtu.be/sNDZO9N4m9Y)

_(اس سبق کی ویڈیو دیکھنے کے لیے اوپر دی گئی تصویر پر کلک کریں)_

یہ سیکشن کئی اسباق پر مشتمل ہے:

- **1 آپ کا پہلا سرور**، اس پہلے سبق میں، آپ سیکھیں گے کہ اپنا پہلا سرور کیسے بنائیں اور اسے انسپکٹر ٹول کے ساتھ جانچیں، جو آپ کے سرور کو ٹیسٹ اور ڈیبگ کرنے کا ایک قیمتی طریقہ ہے، [سبق کے لیے جائیں](01-first-server/README.md)

- **2 کلائنٹ**، اس سبق میں، آپ سیکھیں گے کہ ایسا کلائنٹ کیسے لکھا جائے جو آپ کے سرور سے جڑ سکے، [سبق کے لیے جائیں](02-client/README.md)

- **3 LLM کے ساتھ کلائنٹ**، کلائنٹ لکھنے کا ایک اور بہتر طریقہ یہ ہے کہ اس میں LLM شامل کریں تاکہ یہ آپ کے سرور کے ساتھ "بات چیت" کر سکے کہ کیا کرنا ہے، [سبق کے لیے جائیں](03-llm-client/README.md)

- **4 Visual Studio Code میں GitHub Copilot Agent موڈ کے ساتھ سرور کا استعمال**۔ یہاں، ہم Visual Studio Code کے اندر سے اپنا MCP سرور چلانے پر غور کریں گے، [سبق کے لیے جائیں](04-vscode/README.md)

- **5 stdio ٹرانسپورٹ سرور** stdio ٹرانسپورٹ موجودہ وضاحت میں MCP سرور سے کلائنٹ مواصلات کے لیے تجویز کردہ معیار ہے، جو محفوظ سب پروسیس پر مبنی مواصلات فراہم کرتا ہے [سبق کے لیے جائیں](05-stdio-server/README.md)

- **6 MCP کے ساتھ HTTP اسٹریمنگ (Streamable HTTP)**۔ جدید HTTP اسٹریمنگ، پیش رفت کی اطلاعات، اور Streamable HTTP کا استعمال کرتے ہوئے قابل توسیع، ریئل ٹائم MCP سرورز اور کلائنٹس کو نافذ کرنے کے بارے میں جانیں۔ [سبق کے لیے جائیں](06-http-streaming/README.md)

- **7 VSCode کے لیے AI ٹول کٹ کا استعمال** اپنے MCP کلائنٹس اور سرورز کو استعمال کرنے اور جانچنے کے لیے [سبق کے لیے جائیں](07-aitk/README.md)

- **8 جانچ**۔ یہاں ہم خاص طور پر اس پر توجہ مرکوز کریں گے کہ ہم اپنے سرور اور کلائنٹ کو مختلف طریقوں سے کیسے جانچ سکتے ہیں، [سبق کے لیے جائیں](08-testing/README.md)

- **9 تعیناتی**۔ یہ باب آپ کے MCP حلوں کو تعینات کرنے کے مختلف طریقوں پر نظر ڈالے گا، [سبق کے لیے جائیں](09-deployment/README.md)

- **10 سرور کے جدید استعمال**۔ یہ باب سرور کے جدید استعمال کا احاطہ کرتا ہے، [سبق کے لیے جائیں](./10-advanced/README.md)

ماڈل کانٹیکسٹ پروٹوکول (MCP) ایک اوپن پروٹوکول ہے جو اس بات کو معیاری بناتا ہے کہ ایپلیکیشنز LLMs کو سیاق و سباق کیسے فراہم کرتی ہیں۔ MCP کو AI ایپلیکیشنز کے لیے USB-C پورٹ کی طرح سمجھیں - یہ AI ماڈلز کو مختلف ڈیٹا ذرائع اور ٹولز سے منسلک کرنے کا ایک معیاری طریقہ فراہم کرتا ہے۔

## سیکھنے کے مقاصد

اس سبق کے اختتام تک، آپ قابل ہوں گے:

- C#, Java, Python, TypeScript، اور JavaScript میں MCP کے لیے ترقیاتی ماحول ترتیب دیں
- حسب ضرورت خصوصیات (وسائل، پرامپٹس، اور ٹولز) کے ساتھ بنیادی MCP سرورز بنائیں اور تعینات کریں
- میزبان ایپلیکیشنز بنائیں جو MCP سرورز سے جڑ سکیں
- MCP کے نفاذ کو جانچیں اور ڈیبگ کریں
- عام سیٹ اپ چیلنجز اور ان کے حل کو سمجھیں
- اپنے MCP کے نفاذ کو مقبول LLM خدمات سے جوڑیں

## اپنا MCP ماحول ترتیب دینا

MCP کے ساتھ کام شروع کرنے سے پہلے، اپنے ترقیاتی ماحول کو تیار کرنا اور بنیادی ورک فلو کو سمجھنا ضروری ہے۔ یہ سیکشن آپ کو ابتدائی سیٹ اپ کے مراحل کے ذریعے رہنمائی کرے گا تاکہ MCP کے ساتھ ایک ہموار آغاز کو یقینی بنایا جا سکے۔

### ضروریات

MCP کی ترقی میں غوطہ لگانے سے پہلے، یقینی بنائیں کہ آپ کے پاس یہ ہیں:

- **ترقیاتی ماحول**: آپ کی منتخب کردہ زبان کے لیے (C#, Java, Python, TypeScript، یا JavaScript)
- **IDE/ایڈیٹر**: Visual Studio, Visual Studio Code, IntelliJ, Eclipse, PyCharm، یا کوئی بھی جدید کوڈ ایڈیٹر
- **پیکیج مینیجرز**: NuGet, Maven/Gradle, pip، یا npm/yarn
- **API کیز**: ان AI خدمات کے لیے جنہیں آپ اپنی میزبان ایپلیکیشنز میں استعمال کرنے کا ارادہ رکھتے ہیں

### سرکاری SDKs

آنے والے ابواب میں آپ Python, TypeScript, Java اور .NET کا استعمال کرتے ہوئے بنائے گئے حل دیکھیں گے۔ یہاں تمام سرکاری طور پر تعاون یافتہ SDKs ہیں۔

MCP کئی زبانوں کے لیے سرکاری SDKs فراہم کرتا ہے:
- [C# SDK](https://github.com/modelcontextprotocol/csharp-sdk) - Microsoft کے ساتھ تعاون میں برقرار رکھا گیا
- [Java SDK](https://github.com/modelcontextprotocol/java-sdk) - Spring AI کے ساتھ تعاون میں برقرار رکھا گیا
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - سرکاری TypeScript نفاذ
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk) - سرکاری Python نفاذ
- [Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk) - سرکاری Kotlin نفاذ
- [Swift SDK](https://github.com/modelcontextprotocol/swift-sdk) - Loopwork AI کے ساتھ تعاون میں برقرار رکھا گیا
- [Rust SDK](https://github.com/modelcontextprotocol/rust-sdk) - سرکاری Rust نفاذ

## اہم نکات

- MCP ترقیاتی ماحول کو ترتیب دینا زبان کے مخصوص SDKs کے ساتھ آسان ہے
- MCP سرورز بنانا اور ان کے ساتھ واضح اسکیموں کے ساتھ ٹولز رجسٹر کرنا شامل ہے
- MCP کلائنٹس سرورز اور ماڈلز سے جڑتے ہیں تاکہ توسیعی صلاحیتوں سے فائدہ اٹھایا جا سکے
- قابل اعتماد MCP نفاذ کے لیے جانچ اور ڈیبگنگ ضروری ہیں
- تعیناتی کے اختیارات مقامی ترقی سے لے کر کلاؤڈ پر مبنی حل تک ہیں

## مشق

ہمارے پاس نمونوں کا ایک سیٹ ہے جو اس سیکشن کے تمام ابواب میں آپ کو نظر آنے والی مشقوں کی تکمیل کرتا ہے۔ اس کے علاوہ، ہر باب میں اپنی مشقیں اور اسائنمنٹس بھی ہیں۔

- [Java کیلکولیٹر](./samples/java/calculator/README.md)
- [.Net کیلکولیٹر](../../../03-GettingStarted/samples/csharp)
- [JavaScript کیلکولیٹر](./samples/javascript/README.md)
- [TypeScript کیلکولیٹر](./samples/typescript/README.md)
- [Python کیلکولیٹر](../../../03-GettingStarted/samples/python)

## اضافی وسائل

- [Azure پر ماڈل کانٹیکسٹ پروٹوکول کا استعمال کرتے ہوئے ایجنٹس بنائیں](https://learn.microsoft.com/azure/developer/ai/intro-agents-mcp)
- [Azure Container Apps کے ساتھ ریموٹ MCP (Node.js/TypeScript/JavaScript)](https://learn.microsoft.com/samples/azure-samples/mcp-container-ts/mcp-container-ts/)
- [.NET OpenAI MCP ایجنٹ](https://learn.microsoft.com/samples/azure-samples/openai-mcp-agent-dotnet/openai-mcp-agent-dotnet/)

## آگے کیا ہے

اگلا: [اپنا پہلا MCP سرور بنانا](01-first-server/README.md)

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔