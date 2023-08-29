## Features implemented in the smart contract

The smart contract implements a TikTok-like platform on the Ethereum blockchain, allowing users to create, like, and dislike videos. It features video creation with captions and URLs, video liking and disliking by users, tracking of user likes to prevent duplicate actions, and the ability to retrieve video information and counts.


## Overview of the different web framework and libraries used in your application and how they were used

My application is a full-stack web app built with Next.js, a React framework that enables server-side rendering and dynamic routing. I use various libraries to enhance the user interface and functionality, such as rainbowkit for connecting wallets, react-icons for adding icons, react-modal for displaying modals, ethers and wagmi for interacting with Ethereum, and javascript-time-ago and truncate-eth-address for formatting time and addresses.

### MainView
![image](https://github.com/rywndr/SocialdApp/assets/88234565/86e5aded-72b8-4231-bee0-453bb04f3337)

### Upload New Video
![image](https://github.com/rywndr/SocialdApp/assets/88234565/ed5b318f-9234-41c6-a845-8bc4b3933b75)

### Liking a Video
![image](https://github.com/rywndr/SocialdApp/assets/88234565/2ebd276c-faab-41e5-a29d-a054f7911354)

### Live dApp view
[Live Demo](https://tiktokdapp.vercel.app/)

## Important!

If you copy pasted a tiktok video straight from tiktok, and posted it on the app, The video wouldn't show because of CORS Blocked error. Web browsers use security constraints to improve their performance. CORS is a security feature that stops web pages from requesting resources from domains other than the one that provided the web page. This restriction is in place to protect against potential security flaws such as cross-site request forgery (CSRF) attacks. If you copy a TikTok video link from their website and try to paste it in the app, we get a CORS error because TikTok's server is likely transmitting CORS headers that prevent your web app's domain from performing requests to their server.

So to solve that you can copy the link straight from Tiktok and then go to this [SnapTik](https://snaptik.app/) and then paste the TikTok address there, and then press download

![image](https://github.com/rywndr/SocialdApp/assets/88234565/a5a682e9-4216-4cac-9e51-33a02a3a327d)

and then you can right click the download button and copy the link address

![image](https://github.com/rywndr/SocialdApp/assets/88234565/42f61827-b376-4994-b0bf-946ef7e5b007)

we utilize this TikTok downloader service and then copy the link from there, the downloader service may be proxying or altering the request in a way that circumvents the CORS restrictions. This could entail making the request from their server rather than the dApp's domain, or it could entail utilizing other strategies to avoid the CORS problem.

now paste that link into the app, and then when you create a new post with the link you get from SnapTik, the video should pop up and play normally 😊


