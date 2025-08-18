// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Hover grow effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
  });
  card.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// Modal
const projectData = {
  logging: {
    title: "Tamper-Evident Logging System",
    bullets: [
      "Blockchain-inspired logging system in C.",
      "Client-server model for secure log validation.",
      "SHA-256 hashing + proof-of-work for integrity."
    ]
  },
  lenet: {
    title: "LeNet-5 Digit Classifier",
    bullets: [
      "Implemented CNN in PyTorch for MNIST digits.",
      "Used advanced optimization + exact 2nd-order derivatives.",
      "Enhanced with ReLU, dropout, augmentation."
    ]
  },
  sentiment: {
    title: "Sentiment Analysis Reviewer",
    bullets: [
      "Built model with NLTK on Amazon dataset.",
      "85%+ accuracy mapping sentiment to ratings.",
      "Visualized trends using Seaborn + Matplotlib."
    ]
  },
  cnn: {
    title: "Convolutional Pathfinding CNN",
    bullets: [
      "CNN trained to navigate 2D grid under uncertainty.",
      "Generated new data dynamically to avoid overfitting.",
      "Achieved ~80% accuracy predicting optimal moves."
    ]
  },
  probabilistic: {
    title: "Probabilistic Bot",
    bullets: [
      "Bots using conditional probability in 2D grids.",
      "Handled uncertainty in decision-making.",
      "Analyzed efficiency + adaptability."
    ]
  },
  pathfinding: {
    title: "Pathfinding Bot (BFS/A*)",
    bullets: [
      "Implemented BFS and A* algorithms in dynamic grid.",
      "Simulated fire spread + analyzed algorithm efficiency.",
      "Compared success rates across conditions."
    ]
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.project;
    const project = projectData[key];
    modalTitle.textContent = project.title;
    modalDetails.innerHTML = project.bullets.map(b => `<li>${b}</li>`).join('');
    modal.style.display = 'flex';
  });
});
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
