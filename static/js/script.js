

// // document.addEventListener("DOMContentLoaded", function () {
// //     // Step 1: Display "NewsyMedia" in English with animation
// //     const englishProjectName = document.querySelector('.project-name');
// //     gsap.to(englishProjectName, {
// //         duration: 2,
// //         opacity: 1,
// //         y: 0,
// //         ease: 'power2.inOut',
// //         onComplete: function () {
// //             // Step 2: Disappear the English text
// //             gsap.to(englishProjectName, { duration: 2, opacity: 0, ease: 'power2.inOut', onComplete: function () {
// //                 // Step 3: Display the Hindi text in the middle
// //                 const hindiProjectName = document.querySelector('.project-name.hidden');
// //                 hindiProjectName.style.display = 'block';
// //                 gsap.to(hindiProjectName, { duration: 1, opacity: 1, y: 0, ease: 'power2.inOut', onComplete: function () {
// //                     // Step 4: Disappear the Hindi text
// //                     gsap.to(hindiProjectName, { duration: 2, opacity: 0, y: -40, ease: 'power2.inOut', onComplete: function () {
// //                         // Step 5: Display loading icon and text with a delay
// //                         const loadingIcon = document.querySelector('.loading-icon');
// //                         const loadingText = document.querySelector('.loading-text');
// //                         setTimeout(function () {
// //                             loadingIcon.style.display = 'block';
// //                             loadingText.style.display = 'block';
// //                         }, 500); // Adjust the delay as needed for a smoother transition
// //                     } });
// //                 } });
// //             } });
// //         }
// //     });
// // });


// document.addEventListener("DOMContentLoaded", function () {
//     const englishProjectName = document.querySelector('.project-name');
//     gsap.to(englishProjectName, {
//         duration: 2,
//         opacity: 1,
//         y: 0,
//         ease: 'power2.inOut',
//         onComplete: function () {
//             gsap.to(englishProjectName, { duration: 2, opacity: 0, ease: 'power2.inOut', onComplete: function () {
//                 const hindiProjectName = document.querySelector('.project-name.hidden');
//                 hindiProjectName.style.display = 'block';
//                 gsap.to(hindiProjectName, { duration: 1, opacity: 1, y: -20, ease: 'power2.inOut', onComplete: function () {
//                     gsap.to(hindiProjectName, { duration: 2, opacity: 0, y: -40, ease: 'power2.inOut', onComplete: function () {
//                         const loadingIcon = document.querySelector('.loading-icon');
//                         const loadingText = document.querySelector('.loading-text');
//                         loadingIcon.style.display = 'block';
//                         loadingText.style.display = 'block';
//                         setTimeout(function () {
//                             window.location.href = '/main'; // Redirect to main.html
//                         }, 3000); // Delay for 3 seconds
//                     } });
//                 } });
//             } });
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const englishProjectName = document.querySelector('.project-name');

    gsap.to(englishProjectName, {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        onComplete: function () {
            gsap.to(englishProjectName, { duration: 2, opacity: 0, ease: 'power2.inOut', onComplete: function () {
                const hindiProjectName = document.querySelector('.project-name.hidden');
                hindiProjectName.style.display = 'block';
                gsap.to(hindiProjectName, { duration: 1, opacity: 1, y: -20, ease: 'power2.inOut', onComplete: function () {
                    gsap.to(hindiProjectName, { duration: 2, opacity: 0, y: -40, ease: 'power2.inOut', onComplete: function () {
                        const loadingIcon = document.querySelector('.loading-icon');
                        const loadingText = document.querySelector('.loading-text');
                        loadingIcon.style.display = 'block';
                        loadingText.style.display = 'block';

                        setTimeout(function () {
                            // Smooth scroll to the new page
                            const mainPageElement = document.querySelector('.main-page');
                            gsap.to(window, { duration: 1, scrollTo: { y: mainPageElement, offsetY: 50 }, onComplete: function () {
                                window.location.href = '/main'; // Redirect to main.html
                            } });
                        }, 3000); // Delay for 3 seconds
                    } });
                } });
            } });
        }
    });
});


