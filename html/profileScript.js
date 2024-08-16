document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function activateTextBlocks() {
        sections.forEach(section => {
            const textBlocks = section.querySelectorAll('.text-block p');
            const speed = section.getAttribute('data-speed');
            
            function showNextBlock(i) {
                if (i < textBlocks.length) {
                    const block = textBlocks[i];
                    const text = block.innerHTML;
                    block.innerHTML = '';
                    let j = 0;

                    function typeWriter() {
                        if (j < text.length) {
                            block.innerHTML += text.charAt(j);
                            j++;
                            setTimeout(typeWriter, speed);
                        } else {
                            block.parentElement.style.opacity = 1;
                            showNextBlock(i + 1);
                        }
                    }
                    block.parentElement.style.opacity = 1;
                    typeWriter();
                }
            }

            showNextBlock(0);

            if (section.id === 'section2') {
                drawRadarChart();
            }
        });
    }

    activateTextBlocks();
});

document.querySelectorAll('.click-box').forEach(function(box) {
    box.style.top = box.getAttribute('data-top');
    box.style.left = box.getAttribute('data-left');
});
