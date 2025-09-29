document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('userAgreementAccepted') === 'true') {
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'user-agreement-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    overlay.style.backdropFilter = 'blur(10px)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'opacity 0.3s ease';

    const modal = document.createElement('div');
    modal.id = 'user-agreement-modal';
    modal.style.background = 'rgba(26, 26, 46, 0.95)';
    modal.style.borderRadius = '12px';
    modal.style.padding = '30px';
    modal.style.textAlign = 'center';
    modal.style.maxWidth = '400px';
    modal.style.width = '90%';
    modal.style.boxShadow = '0 10px 30px rgba(106, 90, 205, 0.5)';
    modal.style.transform = 'scale(0.9)';
    modal.style.transition = 'transform 0.3s ease';

    const title = document.createElement('h2');
    title.textContent = 'Пользовательское соглашение';
    title.style.fontSize = '24px';
    title.style.marginBottom = '20px';
    title.style.color = '#ff69b4';

    const text = document.createElement('p');
    text.textContent = 'Сайт предоставляется "как есть". Мы ни за что не несём ответственность, включая, но не ограничиваясь, содержимым сайта, данными пользователей, использованием сервиса и любыми последствиями. Вся ответственность лежит исключительно на вас как на пользователе.';
    text.style.color = 'rgba(255, 255, 255, 0.8)';
    text.style.fontSize = '16px';
    text.style.lineHeight = '1.6';
    text.style.marginBottom = '30px';

    const agreeBtn = document.createElement('button');
    agreeBtn.textContent = 'Согласен';
    agreeBtn.style.background = 'linear-gradient(45deg, #6a5acd, #9370db)';
    agreeBtn.style.color = 'white';
    agreeBtn.style.border = 'none';
    agreeBtn.style.padding = '10px 25px';
    agreeBtn.style.borderRadius = '30px';
    agreeBtn.style.cursor = 'pointer';
    agreeBtn.style.transition = 'all 0.3s';
    agreeBtn.style.fontWeight = '600';
    agreeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 5px 15px rgba(106, 90, 205, 0.4)';
    });
    agreeBtn.addEventListener('mouseout', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });

    agreeBtn.addEventListener('click', function() {
        localStorage.setItem('userAgreementAccepted', 'true');
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0.9)';
        setTimeout(function() {
            document.body.removeChild(overlay);
        }, 300);
    });

    modal.appendChild(title);
    modal.appendChild(text);
    modal.appendChild(agreeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    setTimeout(function() {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'auto';
        modal.style.transform = 'scale(1)';
    }, 100);
});