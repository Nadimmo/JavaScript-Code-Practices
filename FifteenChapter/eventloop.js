console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
// এখন, এই কোডটি কিভাবে কাজ করবে:

// "Start" কনসোলে লগ হবে এবং স্ট্যাক থেকে সরানো হবে।
// setTimeout ফাংশনটি কল হবে, কিন্তু এটি একটি অ্যাসিঙ্ক্রোনাস কাজ, তাই এটি কিউতে চলে যাবে।
// "End" কনসোলে লগ হবে এবং স্ট্যাক থেকে সরানো হবে।
// এখন স্ট্যাক খালি, তাই ইভেন্ট লুপ কিউ থেকে setTimeout এর কলব্যাক ফাংশনটি নিয়ে আসবে এবং "Timeout" কনসোলে লগ হবে।