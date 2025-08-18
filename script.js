// Cursor effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Grow cursor on hover
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  card.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// Fade-in sections
const fadeElems = document.querySelectorAll('.projects, .about, .contact');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

fadeElems.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

// Modal popup data
const projectData = {
  logging: {
    title: "Tamper-Evident Logging System",
    bullets: [
      "Designed and implemented a blockchain-inspired logging system in C.",
      "Built client-server architecture for secure log submission and validation.",
      "Applied SHA-256 hashing and proof-of-work to chain immutable blocks."
    ]
  },
  lenet: {
    title: "LeNet-5 Neural Network Classifier",
    bullets: [
      "Implemented the original LeNet-5 CNN in PyTorch for MNIST digits.",
      "Used advanced optimization (Stochastic Diagonal Levenberg-Marquardt).",
      "Enhanced with ReLU, dropout, and augmentation to boost robustness."
    ]
  },
  sentiment: {
    title: "Sentiment Analysis Reviewer",
    bullets: [
      "Built sentiment model using NLTK on Kaggle Amazon reviews dataset.",
      "Achieved 85%+ accuracy mapping text to star ratings.",
      "Visualized trends with Seaborn and Matplotlib."
    ]
  },
  cnn: {
    title: "Convolutional Pathfinding CNN",
    bullets: [
      "Converted a probabilistic bot into a CNN for 2D grid navigation.",
      "Trained on dynamic pathfinding data under uncertain conditions.",
      "Achieved ~80% accuracy predicting optimal moves."
    ]
  },
  probabilistic: {
    title: "Probabilistic Bot",
    bullets: [
      "Designed bots using conditional probability for decision-making.",
      "Handled uncertainty in dynamic 2D environments.",
      "Studied efficiency and adaptability trade-offs."
    ]
  },
  pathfinding: {
    title: "Pathfinding Bot (BFS/A*)",
    bullets: [
      "Implemented BFS and A* bots in dynamic grids with spreading fire.",
      "Simulated performance under varying fire speeds and unpredictability.",
      "Analyzed success rates and decision-making strategies."
    ]
  }
};

// Modal logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const projectKey = card.getAttribute('data-project');
    const project = projectData[projectKey];
    modalTitle.textContent = project.title;
    modalDetails.innerHTML = project.bullets.map(b => `<li>${b}</li>`).join('');
    modal.style.display = 'flex';
  });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
