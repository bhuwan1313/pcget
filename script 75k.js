document.addEventListener('DOMContentLoaded', function() {
    // Expanded image data with more images
    const imageData = [
        {
            id: 1,
            title: "MSI PRO H610M-",
            description: "The MSI PRO H610M-S is a Micro-ATX motherboard that supports Intel 14th, 13th, and 12th generation Core processors, and features DDR4 memory, M.2 PCIe 4.0 slot, and Bluetooth 5.3 according to Amazon.in and MSI. It also offers features like Core Boost, Memory Boost, and Audio Boost.",
            imageUrl: "75k motherboard.jpg",
            tags:[""]
        },
        {
            id: 2,
            title: "1TB Crucial P3 Plus NVME",
            description: "Powerful ocean waves crashing against coastal rocks. The turquoise water contrasts beautifully with the white foam.",
            imageUrl: "75k SSD.jpeg",
            tags: [""]
        },
        {
            id: 3,
            title: "Gigabyte GP-P550B 80plus bronze 550W",
            description: "Modern city skyline at dusk with lights starting to twinkle. The glass skyscrapers reflect the colorful sunset.",
            imageUrl: "75k SMPS.jpg",
            tags: [""]
        },
        {
            id: 4,
            title: "Crucial 2*16gb (Dual Kit)",
            description: "A serene path winding through a dense green forest. Sunlight filters through the canopy creating beautiful patterns.",
            imageUrl: "75k RAM.jpg",
            tags: [""]
        },
        {
            id: 5,
            title: "Processor",
            description: "Endless sand dunes stretching to the horizon under a deep blue sky. The wind has sculpted perfect curves in the sand.",
            imageUrl: "75k Processor.webp",
            tags: [""]
        },
        {
            id: 6,
            title: "Cabinet",
            description: "Vibrant autumn foliage with red, orange and yellow leaves creating a colorful tapestry in the forest.",
            imageUrl: "75k cabinet.jpg",
            tags: [""]
        },
        {
            id: 7,
            title: "Graphics Card",
            description: "A powerful waterfall cascading down a cliff into a misty pool below. The constant roar of water fills the valley.",
            imageUrl: "75k graphics card.webp",
            
            tags: [""]
        },
        // {
        //     id: 8,
        //     title: "Mountain Lake",
        //     description: "Crystal clear alpine lake reflecting the surrounding mountains. The still water creates a perfect mirror image.",
        //     imageUrl: "https://picsum.photos/id/1036/800/600",
        //     tags: ["Mountain", "Lake", "Reflection"]
        // },
        // {
        //     id: 9,
        //     title: "Countryside",
        //     description: "Rolling green hills with scattered trees under a dramatic cloudy sky. A peaceful rural landscape.",
        //     imageUrl: "https://picsum.photos/id/1052/800/600",
        //     tags: ["Countryside", "Hills", "Green"]
        // },
        // {
        //     id: 10,
        //     title: "Tropical Beach",
        //     description: "Palm-fringed white sand beach with turquoise water. The perfect tropical paradise getaway.",
        //     imageUrl: "https://picsum.photos/id/1060/800/600",
        //     tags: ["Beach", "Tropical", "Paradise"]
        // }
    ];

    // Render images
    function renderImages() {
        const container = document.getElementById('imageContainer');
        
        imageData.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.dataset.id = item.id;
            
            panel.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <p class="description">${item.description}</p>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            panel.addEventListener('click', function() {
                // If this panel is already active, collapse it
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    // Collapse all panels
                    document.querySelectorAll('.panel').forEach(p => {
                        p.classList.remove('active');
                    });
                    // Expand this panel
                    this.classList.add('active');
                }
            });
            
            container.appendChild(panel);
        });
    }

    // Initialize the app
    renderImages();
});