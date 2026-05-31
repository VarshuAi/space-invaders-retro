
            const canvas = document.getElementById('si-canvas');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'green';
            ctx.fillRect(180, 270, 40, 20); // Defender
            
            ctx.fillStyle = 'red';
            for(let x=50; x<350; x+=60) {
                ctx.fillRect(x, 40, 30, 20); // Invaders
            }
            
            ctx.fillStyle = '#fff';
            ctx.font = '16px sans-serif';
            ctx.fillText('Move mouse to align defender', 100, 160);
        