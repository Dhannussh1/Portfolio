document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor (King Piece)
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Timeline Slider Logic
    const timelineData = {
        childhood: [
            {
                img: 'images/ch1.jpeg',
                text: `Born on the <strong>18th of September, 2004</strong>, in the vibrant city of <strong>Chennai</strong>, my arrival marked the beginning of a journey defined by curiosity. A wise proverb says, "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." Even as an infant, I seemed to grasp the essence of this wisdom, bringing a unique spark to my family. This day in Chennai wasn't just my birth; it was the start of a story that would blend <strong>tradition with technology</strong>, and <strong>strategy with heart</strong>. Every step since has been a building block toward becoming the person I am today—a storyteller in code and a strategist in life.`
            },
            {
                img: 'images/ch2.jpeg',
                text: `From my earliest years, the world was my stage. I started <strong>"acting"</strong> before I could even properly articulate words—not as a clown to be laughed at, but as a source of <strong>pure joy</strong> for those around me. I embraced every role with enthusiasm: the dutiful son, the playful grandson, the curious explorer. I donned many costumes and played many parts, but my primary goal was always to <strong>never disappoint</strong>. My family recalls a child who could light up a room with a single performance, teaching me early on the power of empathy and the importance of fulfilling my roles with dedication. This period laid the foundation for my <strong>leadership skills</strong> and my ability to connect with people from all walks of life.`
            },
            {
                img: 'images/ch3.jpg',
                text: `The most pivotal chapter of my childhood began when my father sat me down in front of a 64-square board. <strong>Chess</strong> didn't just become a hobby; it became a <strong>part of my very soul</strong>. Taught by my father's patient hands, I learned that every move has a consequence and that <strong>foresight</strong> is the greatest weapon. This wasn't just a game; it was a mentorship in strategy, patience, and resilience. My father didn't just teach me how to move the pieces; he taught me how to think <strong>three steps ahead</strong> in life. This early introduction to the world of <strong>FIDE-rated competition</strong> would later define my approach to software development—where every line of code is a calculated move in a larger strategic masterpiece.`
            }
        ],
        school: [
            {
                img: 'images/sch1.jpeg',
                text: `From <strong>LKG to 12th Grade</strong>, my life revolved around a single sanctuary of learning: <a href="https://www.sethubhaskara.co.in/" target="_blank"><strong>Sethu Bhaskara Matriculation Higher Secondary School</strong></a>. Spending over a decade in one institution allowed me to build deep-rooted memories and friendships that transcend time. These hallways witnessed my transition from a shy child to a <strong>confident young man</strong>. The teachers weren't just educators; they were <strong>second parents</strong> who nurtured my academic growth and character. Every corner of the school holds a story—of late-night study sessions, competitive sports, and the shared laughter of friends who grew up together. It was here that my foundation was built, proving that <strong>consistency</strong> and a supportive environment are the keys to long-term success.`
            },
            {
                img: 'images/sch2.jpeg',
                text: `The <strong>3rd standard</strong> marked a significant "twist" in my life—my first major achievement in the world of competitive chess. This victory was made possible by the incredible mentorship of <strong>Mr. Thiyagarajan</strong> (Physical Education HOD) and <strong>Loganathan Sir</strong>, who recognized my potential and made me <strong>competitive enough</strong> in an incredibly short span. Their guidance led me to secure the <strong>first-place position</strong> at the <strong>Zonal levels</strong> in my very first tournament. This was a moment of immense pride, transforming me from a quiet student into a recognized achiever. That small gold medal represented more than just a victory; it was the first realization that my father's lessons, coupled with the right coaching, could yield extraordinary results. It gave me the confidence to handle the <strong>"climax" of intense competition</strong> with grace and set the stage for my future as a FIDE-rated player.`
            },
            {
                img: 'images/sch.jpg',
                text: `The end of my school journey was met with the global plot twist that was the <strong>COVID-19 pandemic</strong>. While it could have been a disappointing climax, it instead revealed the <strong>unconditional love</strong> and bond between teachers and students. We moved from classrooms to screens, but the connection remained unbreakable. I left a lasting impression on my mentors—the impact was so profound that they still recall my contributions. My teachers could never forget the student who kept the spirit alive even through a digital interface. This period taught me that even the most unexpected plot twists can't dampen <strong>true passion</strong> and that the relationships we build are the most valuable assets we carry into the next chapter of our lives.`
            }
        ],
        college: [
            {
                img: 'images/clg1.jpg',
                text: `In <strong>2022</strong>, I stepped into the prestigious <a href="http://sairam.edu.in/" target="_blank"><strong>Sri Sairam Engineering College</strong></a> to pursue my <strong>B.Tech in Artificial Intelligence and Data Science</strong>. I arrived with a heart full of dreams and a mind ready to absorb the future of technology. This wasn't just about a degree; it was about entering a hub of <strong>innovation</strong> where AI isn't just a subject, but a way of life. From day one, I immersed myself in the culture of excellence that Sairam is known for. I saw every lecture and every lab session as an opportunity to move closer to my goal of building <strong>intelligent systems</strong> that can change the world. The transition from school to this high-tech environment was the spark that ignited my passion for <strong>RAG systems and LLMs</strong>.`
            },
            {
                img: 'images/clg 2.jpeg',
                text: `My college life has been a whirlwind of leadership and <strong>"Department Magic."</strong> As a member of the core department team, I've served as a <strong>Maths Club Coordinator</strong>, <strong>IEEE Student Coordinator</strong>, and a trainer for the <strong>Code Club</strong>. I've conducted over <strong>5 national-level school events</strong> and even served as a trainer for Sairam school teachers. One of my proudest roles was being the <strong>Project Leader</strong> for a drone-based project at the Sairam Techno Incubator. My leadership extended to conducting national conferences and coordinating complex technical events. These roles taught me the art of multitasking, the importance of <strong>teamwork</strong>, and the joy of sharing knowledge. I didn't just study AI; I lived it through management and innovation, proving that a developer must also be a leader.`
            },
            {
                img: 'images/clg3.jpeg',
                text: `My competitive spirit reached new heights in college, leading me to become a <strong>7x Hackathon Winner</strong> and a multi-time winner in prestigious maths and cult events at institutions like <strong>SSN, Agni, and SRM</strong>. However, the crown jewel of my college journey is becoming an <a href="https://ratings.fide.com/profile/25712691" target="_blank"><strong>International FIDE Rated Chess Player</strong></a>. This achievement is my most memorable, as it bridges my childhood passion with my adult determination. Balancing intense engineering studies with the rigor of international chess was a feat of <strong>discipline</strong>. These victories aren't just about trophies; they represent the <strong>persistence</strong> required to excel in multiple fields simultaneously. They prove that with strategy and hard work, one can be both a master of code and a master of the board.`
            }
        ],
        job: [
            {
                img: 'images/liq.jpg',
                text: `My professional journey took flight at <a href="https://liquidmind.ai/" target="_blank"><strong>Liquidmind AI</strong></a>, where I served as an <strong>AI Intern</strong> from <strong>September 2024 to November 2024</strong>. As a fresher, this was a period of immense learning and growth. I am deeply grateful to <strong>Naveen Athresh</strong>, the CEO of Liquidmind.ai, for providing me with the opportunity to work on cutting-edge AI solutions. Under his guidance, I learned how to translate theoretical AI concepts into practical, market-ready applications. This experience was instrumental in refining my skills in <strong>RAG and intelligent automation</strong>. It was my first taste of the corporate tech world, and it solidified my desire to build a career at the intersection of innovation and real-world impact. Every task was a lesson in <strong>professional excellence</strong>.`
            },
            {
                img: 'images/itech.jpg',
                text: `From <strong>February 2025 to November 2025</strong>, I took on the role of <strong>AI Developer</strong> at <a href="https://itechindia.co/" target="_blank"><strong>iTech India Private Limited</strong></a>. This was a transformative phase where I worked on high-stakes, real-time projects that demanded precision and innovation. I owe a great deal of thanks to <strong>Biju Narayanan</strong>, the Co-founder and COO of iTech, for his invaluable insights and mentorship. Working in a production environment taught me the importance of <strong>scalability, reliability, and user-centric design</strong> in AI. I was involved in building systems that solved actual business problems, proving that AI is a tool for empowerment. This role transitioned me from an intern to a full-fledged developer capable of handling the complexities of modern <strong>software architecture</strong> and real-time data processing.`
            },
            {
                img: 'images/psiog.jpg',
                text: `In <strong>February 2026</strong>, a new chapter began as I joined the talented team at <a href="https://psiog.com/" target="_blank"><strong>Psiog</strong></a>. This move represents a <strong>new place, a new experience</strong>, and a vast new opportunity to grow as a developer and an AI specialist. At Psiog, I am part of a culture that values innovation and creative problem-solving above all else. This role is the culmination of my journey from a chess-playing child to a hackathon-winning student, and finally, a professional AI developer. I am currently working on <strong>pioneering projects</strong> that challenge my technical boundaries every day. It's an environment where <strong>passion grows with profession</strong>, and I am excited to see how I can continue to contribute to the success of this amazing organization.`
            }
        ]
    };

    const modal = document.getElementById('timeline-modal');
    const closeModal = document.querySelector('.close-modal');
    const slider = document.getElementById('timeline-slider');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    let currentSlideIndex = 0;
    let currentEvent = '';
    let autoSlideInterval;

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            currentEvent = item.getAttribute('data-event');
            openTimelineModal(currentEvent);
        });
    });

    function openTimelineModal(event) {
        currentSlideIndex = 0;
        const slides = timelineData[event];

        // Inject slides with new side-by-side layout
        slider.innerHTML = slides.map(slide => `
            <div class="slide">
                <div class="slide-content-wrapper">
                    <div class="slide-image-square">
                        <img src="${slide.img}" alt="Timeline Image">
                    </div>
                    <div class="slide-text-rectangle">
                        <p>${slide.text}</p>
                    </div>
                </div>
            </div>
        `).join('');

        // Create dots
        dotsContainer.innerHTML = slides.map((_, i) => `
            <div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');

        modal.style.display = 'block';
        updateSlider();
        startAutoSlide();

        // Add dot click events
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                currentSlideIndex = parseInt(dot.getAttribute('data-index'));
                updateSlider();
                resetAutoSlide();
            });
        });
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlideIndex * (100 / 3)}%)`;

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlideIndex);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % 3;
            updateSlider();
        }, 30000); // 30 seconds
    }

    function resetAutoSlide() {
        startAutoSlide();
    }

    prevBtn.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : 2;
        updateSlider();
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex < 2) ? currentSlideIndex + 1 : 0;
        updateSlider();
        resetAutoSlide();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        clearInterval(autoSlideInterval);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            clearInterval(autoSlideInterval);
        }
    });

    // 4. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .skills-card, .project-card, .hobby-card, .family-member, .message-box, .glitter-text, .academic-card, .score-item, .co-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // CSS for Intersection Observer
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 5. Hero Pic Placeholder if error
    const heroPic = document.getElementById('hero-pic');
    heroPic.onerror = () => {
        heroPic.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800';
    };

    // Add similar error handling for other images
    // 6. Recent Updates Slider
    const recentSlider = document.getElementById('recent-slider');
    const recentDots = document.querySelectorAll('.recent-dot');
    const recentPrev = document.getElementById('recent-prev');
    const recentNext = document.getElementById('recent-next');
    let recentIndex = 0;
    let recentAutoInterval;

    function updateRecentSlider() {
        recentSlider.style.transform = `translateX(-${recentIndex * 50}%)`;
        recentDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === recentIndex);
        });
    }

    function startRecentAutoSlide() {
        clearInterval(recentAutoInterval);
        recentAutoInterval = setInterval(() => {
            recentIndex = (recentIndex + 1) % 2;
            updateRecentSlider();
        }, 30000); // 30 seconds
    }

    recentDots.forEach(dot => {
        dot.addEventListener('click', () => {
            recentIndex = parseInt(dot.getAttribute('data-index'));
            updateRecentSlider();
            startRecentAutoSlide();
        });
    });

    recentPrev.addEventListener('click', () => {
        recentIndex = (recentIndex > 0) ? recentIndex - 1 : 1;
        updateRecentSlider();
        startRecentAutoSlide();
    });

    recentNext.addEventListener('click', () => {
        recentIndex = (recentIndex < 1) ? recentIndex + 1 : 0;
        updateRecentSlider();
        startRecentAutoSlide();
    });

    startRecentAutoSlide();
    
    // 7. Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeLightboxModal() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scroll
    }

    // Event Delegation for all images
    document.addEventListener('click', (e) => {
        // Open lightbox if an image is clicked, UNLESS it's already the one inside the lightbox
        if (e.target.tagName === 'IMG' && e.target.id !== 'lightbox-img') {
            openLightbox(e.target.src);
        }
    });

    // Special handling for timeline images since they are inside a modal
    // Actually the delegation above handles them unless they are stopped by propagation
    // I'll make sure delegation is broad enough
    
    closeLightbox.addEventListener('click', closeLightboxModal);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightboxModal();
        }
    });

    // 8. Swipe Support for Mobile
    function addSwipeSupport(element, onSwipeLeft, onSwipeRight) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        element.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        element.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) onSwipeLeft();
            if (touchEndX > touchStartX + 50) onSwipeRight();
        }
    }

    // Apply to Journey Slider
    const journeySlider = document.querySelector('.slider-content');
    if (journeySlider) {
        // nextSlide and prevSlide are accessible here as they are in the same scope
        addSwipeSupport(journeySlider, nextSlide, prevSlide);
    }

    // Apply to Recent Updates Slider
    const recentSliderElem = document.getElementById('recent-slider');
    if (recentSliderElem) {
        addSwipeSupport(recentSliderElem, () => {
            recentIndex = (recentIndex + 1) % 2;
            updateRecentSlider();
            startRecentAutoSlide();
        }, () => {
            recentIndex = (recentIndex > 0) ? recentIndex - 1 : 1;
            updateRecentSlider();
            startRecentAutoSlide();
        });
    }
});
