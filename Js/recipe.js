const votesData = JSON.parse(localStorage.getItem('recipeVotes')) || {};


document.addEventListener('DOMContentLoaded', () => {
  for (const recipeId in votesData) {
    const { likes = 0, dislikes = 0, voted } = votesData[recipeId];
    document.getElementById(recipeId + '-likes').textContent = likes;
    document.getElementById(recipeId + '-dislikes').textContent = dislikes;

    if (voted) {
      disableButtons(recipeId);
    }
  }
});

function vote(recipeId, type) {
  if (votesData[recipeId]?.voted) {
    alert("Vous avez déjà voté pour cette recette.");
    return;
  }

  if (!votesData[recipeId]) {
    votesData[recipeId] = { likes: 0, dislikes: 0, voted: false };
  }

  if (type === 'like') {
    votesData[recipeId].likes++;
  } else if (type === 'dislike') {
    votesData[recipeId].dislikes++;
  }

  votesData[recipeId].voted = true;

  document.getElementById(recipeId + '-likes').textContent = votesData[recipeId].likes;
  document.getElementById(recipeId + '-dislikes').textContent = votesData[recipeId].dislikes;

  disableButtons(recipeId);

  localStorage.setItem('recipeVotes', JSON.stringify(votesData));
}

function disableButtons(recipeId) {
  const container = document.getElementById(recipeId);
  const buttons = container.querySelectorAll('button.like-btn, button.dislike-btn');
  buttons.forEach(btn => btn.disabled = true);
}
