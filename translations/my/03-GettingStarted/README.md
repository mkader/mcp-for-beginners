<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "94b861de00829c34912ac36140f6183e",
  "translation_date": "2025-10-06T15:28:10+00:00",
  "source_file": "03-GettingStarted/README.md",
  "language_code": "my"
}
-->
## စတင်ခြင်း  

[![သင့်ရဲ့ ပထမဆုံး MCP Server တည်ဆောက်ခြင်း](../../../translated_images/04.0ea920069efd979a0b2dad51e72c1df7ead9c57b3305796068a6cee1f0dd6674.my.png)](https://youtu.be/sNDZO9N4m9Y)

_(အပေါ်ရှိ ပုံကိုနှိပ်ပြီး ဒီသင်ခန်းစာရဲ့ ဗီဒီယိုကို ကြည့်ပါ)_

ဒီအပိုင်းမှာ သင်ခန်းစာအတော်များများ ပါဝင်ပါတယ်။

- **1 သင့်ရဲ့ ပထမဆုံး server**၊ ဒီပထမဆုံး သင်ခန်းစာမှာ သင့်ရဲ့ ပထမဆုံး server ကို ဘယ်လိုတည်ဆောက်ရမယ်ဆိုတာ သင်ယူပြီး၊ server ကို စမ်းသပ်ခြင်းနှင့် အမှားရှာဖွေခြင်းအတွက် အသုံးဝင်တဲ့ inspector tool ကို အသုံးပြုပါမယ်။ [သင်ခန်းစာဆီသို့](01-first-server/README.md)

- **2 Client**၊ ဒီသင်ခန်းစာမှာ သင့်ရဲ့ server ကို ချိတ်ဆက်နိုင်တဲ့ client ကို ဘယ်လိုရေးရမယ်ဆိုတာ သင်ယူပါမယ်။ [သင်ခန်းစာဆီသို့](02-client/README.md)

- **3 Client with LLM**၊ client ကို ပိုမိုကောင်းမွန်စွာရေးသားဖို့ LLM ကို ထည့်သွင်းပြီး server နဲ့ "ညှိနှိုင်း" လုပ်နိုင်အောင် ပြုလုပ်ပါမယ်။ [သင်ခန်းစာဆီသို့](03-llm-client/README.md)

- **4 Visual Studio Code မှာ GitHub Copilot Agent mode နဲ့ server ကို အသုံးပြုခြင်း**။ ဒီမှာတော့ MCP Server ကို Visual Studio Code မှာ အလုပ်လုပ်အောင် ပြုလုပ်ပါမယ်။ [သင်ခန်းစာဆီသို့](04-vscode/README.md)

- **5 stdio Transport Server** stdio transport က MCP server-to-client ဆက်သွယ်မှုအတွက် လက်ရှိ specification မှာ အကြံပြုထားတဲ့ စံနည်းဖြစ်ပြီး subprocess-based ဆက်သွယ်မှုကို လုံခြုံစွာပေးစွမ်းပါတယ်။ [သင်ခန်းစာဆီသို့](05-stdio-server/README.md)

- **6 MCP နဲ့ HTTP Streaming (Streamable HTTP)**။ ခေတ်မီ HTTP streaming, progress notifications, နှင့် Streamable HTTP ကို အသုံးပြုပြီး MCP servers နှင့် clients ကို scalable, real-time အဖြစ် တည်ဆောက်နည်းကို သင်ယူပါမယ်။ [သင်ခန်းစာဆီသို့](06-http-streaming/README.md)

- **7 VSCode အတွက် AI Toolkit ကို အသုံးပြုခြင်း** MCP Clients နှင့် Servers ကို စမ်းသပ်ခြင်းနှင့် အသုံးပြုခြင်း။ [သင်ခန်းစာဆီသို့](07-aitk/README.md)

- **8 စမ်းသပ်ခြင်း**။ ဒီမှာတော့ server နှင့် client ကို အမျိုးမျိုးသောနည်းလမ်းများဖြင့် စမ်းသပ်နည်းကို အထူးအာရုံစိုက်ပါမယ်။ [သင်ခန်းစာဆီသို့](08-testing/README.md)

- **9 Deployment**။ ဒီအခန်းမှာ MCP solutions များကို တင်သွင်းနည်းလမ်းများကို လေ့လာပါမယ်။ [သင်ခန်းစာဆီသို့](09-deployment/README.md)

- **10 Server ကို အဆင့်မြှင့်အသုံးပြုခြင်း**။ ဒီအခန်းမှာ server ကို အဆင့်မြှင့်အသုံးပြုနည်းများကို လေ့လာပါမယ်။ [သင်ခန်းစာဆီသို့](./10-advanced/README.md)

Model Context Protocol (MCP) က application များသည် LLMs ကို context ပေးစွမ်းနည်းကို စံပြုထားတဲ့ open protocol ဖြစ်ပါတယ်။ MCP ကို AI application များအတွက် USB-C port တစ်ခုလိုပဲ စဉ်ဆက်မပြတ် data sources နှင့် tools များကို ချိတ်ဆက်နိုင်တဲ့ စံနည်းတစ်ခုအဖြစ် စဉ်းစားနိုင်ပါတယ်။

## သင်ယူရမည့် ရည်မှန်းချက်များ

ဒီသင်ခန်းစာပြီးဆုံးချိန်မှာ သင်တတ်မြောက်ထားမည့်အရာများမှာ:

- C#, Java, Python, TypeScript, နှင့် JavaScript အတွက် MCP development environments ကို စတင်တပ်ဆင်ခြင်း
- resources, prompts, နှင့် tools များကို custom features ဖြင့် MCP servers တည်ဆောက်ခြင်းနှင့် တင်သွင်းခြင်း
- MCP servers ကို ချိတ်ဆက်နိုင်တဲ့ host applications တည်ဆောက်ခြင်း
- MCP implementations များကို စမ်းသပ်ခြင်းနှင့် အမှားရှာဖွေခြင်း
- အများဆုံးတွေ့ရတဲ့ setup အခက်အခဲများနှင့် ၎င်းတို့၏ ဖြေရှင်းနည်းများကို နားလည်ခြင်း
- MCP implementations များကို လူကြိုက်များတဲ့ LLM services များနှင့် ချိတ်ဆက်ခြင်း

## MCP Environment ကို စတင်တပ်ဆင်ခြင်း

MCP နဲ့ အလုပ်လုပ်မည်မတိုင်မီ သင့်ရဲ့ development environment ကို ပြင်ဆင်ပြီး workflow အခြေခံကို နားလည်ထားဖို့ အရေးကြီးပါတယ်။ ဒီအပိုင်းမှာ MCP ကို စတင်အသုံးပြုဖို့ လိုအပ်တဲ့ အဆင့်များကို လမ်းညွှန်ပေးပါမယ်။

### လိုအပ်ချက်များ

MCP development ကို စတင်မည်မတိုင်မီ သင့်မှာ:

- **Development Environment**: သင်ရွေးချယ်ထားတဲ့ programming language (C#, Java, Python, TypeScript, or JavaScript) အတွက်
- **IDE/Editor**: Visual Studio, Visual Studio Code, IntelliJ, Eclipse, PyCharm, သို့မဟုတ် ခေတ်မီ code editor တစ်ခု
- **Package Managers**: NuGet, Maven/Gradle, pip, သို့မဟုတ် npm/yarn
- **API Keys**: သင့် host applications တွေမှာ အသုံးပြုမည့် AI services အတွက်

### တရားဝင် SDK များ

လာမည့်အခန်းများမှာ Python, TypeScript, Java, နှင့် .NET ကို အသုံးပြုထားတဲ့ solutions များကို တွေ့မြင်ရပါမယ်။ အောက်မှာ တရားဝင်ထောက်ခံထားတဲ့ SDK များကို ဖော်ပြထားပါတယ်။

MCP က programming language အမျိုးမျိုးအတွက် တရားဝင် SDK များကို ပေးထားပါတယ်:
- [C# SDK](https://github.com/modelcontextprotocol/csharp-sdk) - Microsoft နှင့် ပူးပေါင်းထိန်းသိမ်းထားသည်
- [Java SDK](https://github.com/modelcontextprotocol/java-sdk) - Spring AI နှင့် ပူးပေါင်းထိန်းသိမ်းထားသည်
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) - တရားဝင် TypeScript implementation
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk) - တရားဝင် Python implementation
- [Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk) - တရားဝင် Kotlin implementation
- [Swift SDK](https://github.com/modelcontextprotocol/swift-sdk) - Loopwork AI နှင့် ပူးပေါင်းထိန်းသိမ်းထားသည်
- [Rust SDK](https://github.com/modelcontextprotocol/rust-sdk) - တရားဝင် Rust implementation

## အဓိကအချက်များ

- MCP development environment ကို language-specific SDK များဖြင့် ရိုးရှင်းစွာတပ်ဆင်နိုင်သည်
- MCP servers တည်ဆောက်ခြင်းမှာ tool များကို ရှင်းလင်းတဲ့ schema များဖြင့် ဖန်တီးပြီး register လုပ်ရသည်
- MCP clients များသည် servers နှင့် models များကို ချိတ်ဆက်ပြီး တိုးတက်သောစွမ်းရည်များကို အသုံးပြုသည်
- MCP implementations များကို စမ်းသပ်ခြင်းနှင့် အမှားရှာဖွေခြင်းသည် ယုံကြည်စိတ်ချရသော MCP အကောင်အထည်ဖော်မှုများအတွက် အရေးကြီးသည်
- Deployment options များမှာ local development မှ cloud-based solutions အထိ ကွဲပြားသည်

## လေ့ကျင့်ခြင်း

ဒီအပိုင်းရဲ့ သင်ခန်းစာများမှာ exercises များနှင့် assignments များပါဝင်ပြီး၊ အပိုဆောင်း sample များကိုလည်း ထည့်သွင်းထားပါတယ်။

- [Java Calculator](./samples/java/calculator/README.md)
- [.Net Calculator](../../../03-GettingStarted/samples/csharp)
- [JavaScript Calculator](./samples/javascript/README.md)
- [TypeScript Calculator](./samples/typescript/README.md)
- [Python Calculator](../../../03-GettingStarted/samples/python)

## အပိုဆောင်း အရင်းအမြစ်များ

- [Model Context Protocol ကို အသုံးပြုပြီး Azure မှာ Agents တည်ဆောက်ခြင်း](https://learn.microsoft.com/azure/developer/ai/intro-agents-mcp)
- [Azure Container Apps (Node.js/TypeScript/JavaScript) နဲ့ Remote MCP](https://learn.microsoft.com/samples/azure-samples/mcp-container-ts/mcp-container-ts/)
- [.NET OpenAI MCP Agent](https://learn.microsoft.com/samples/azure-samples/openai-mcp-agent-dotnet/openai-mcp-agent-dotnet/)

## နောက်တစ်ခု

နောက်တစ်ခု: [သင့်ရဲ့ ပထမဆုံး MCP Server တည်ဆောက်ခြင်း](01-first-server/README.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။