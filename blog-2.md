# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

TypeScript-এর মূল উদ্দেশ্য হলো type safety নিশ্চিত করা, ভুল টাইপের ডাটা ব্যবহার করলে আগে থেকেই error ধরা। 

"let data: any = "Hello";

data.toFixed();"

any ব্যবহার করলে এই safety পুরোপুরি বন্ধ হয়ে যায়। কোনো error দেখাবে না, কিন্তু runtime error হবে| তাই any-কে বলা হয় type safety hole (type system-এর গর্ত), কারণ এটা পুরো type checking system ভেঙে দেয়।


** Type narrowing মানে হলো:
একটি variable-এর broad type (যেমন unknown বা union type) থেকে আসল type খুঁজে বের করা। TypeScript তখন condition ব্যবহার করে type “narrow” করে। অন্যদিকে unknown নিরাপদ কারণ এটা সরাসরি ব্যবহার করা যায় না—আগে type check করতে হয়। এই checking বা refinement প্রক্রিয়াকেই type narrowing বলে।