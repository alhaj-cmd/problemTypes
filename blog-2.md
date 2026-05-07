# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

TypeScript-এর মূল উদ্দেশ্য হলো type safety নিশ্চিত করা, ভুল টাইপের ডাটা ব্যবহার করলে আগে থেকেই error ধরা। 

"let data: any = "Hello";

data.toFixed();"

any ব্যবহার করলে এই safety পুরোপুরি বন্ধ হয়ে যায়। কোনো error দেখাবে না, কিন্তু runtime error হবে| তাই any-কে বলা হয় type safety hole (type system-এর গর্ত), কারণ এটা পুরো type checking system ভেঙে দেয়।
