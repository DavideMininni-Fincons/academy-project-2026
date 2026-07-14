let nextHeroId = 1;
const heroesDatabase = {};
const heroForm = document.getElementById('hero-form');
const heroesTbody = document.getElementById('heroes-tbody');

function renderTable() {
  heroesTbody.innerHTML = '';

  Object.entries(heroesDatabase).forEach(([id, hero]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${hero.name} <small style="color: #64748b">(ID: ${id})</small></strong></td>
      <td>${hero.role}</td>
      <td>${hero.maxHp}</td>
      <td>${hero.exp}</td>
      <td>
        <button class="attack-btn">Attack ⚔️</button>
      </td>
    `;

    const attackBtn = tr.querySelector('.attack-btn');
    attackBtn.addEventListener('click', () => {
      hero.engageInCombat();
      renderTable();
    });

    heroesTbody.appendChild(tr);
  });
}

function Hero(name, role, maxHp) {
  this.name = name;
  this.role = role;
  this.maxHp = maxHp;
  this.exp = 0;
}

Hero.prototype.gainExp = function(amount) {
  this.exp += amount;
};

Hero.prototype.engageInCombat = function() {
  const expGained = Math.floor(Math.random() * 15) + 5;
  this.gainExp(expGained);
};

heroForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('hero-name').value;
  const role = document.getElementById('hero-role').value;
  const maxHp = Number(document.getElementById('hero-hp').value);

  heroesDatabase[nextHeroId] = new Hero(name, role, maxHp);
  nextHeroId++;
  heroForm.reset();
  renderTable();
});