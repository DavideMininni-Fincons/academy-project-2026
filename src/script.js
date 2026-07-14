/**
 * Exercise notes
 *
 * The index page displays a form for heroes creation.
 *
 * The script here is missing the constructor function for the Hero itself
 * and the heroesDatabase to store them (key: auto-generated id).
 * Complete following the instruction
 */

/**
 * Create a variable which will be used as heroes' id.
 * Name: `nextHeroId`
 * Type: `number`
 */
______

/**
 * Create a variable for storing heroes.
 * Name: `heroesDatabase`
 * Type: `object`
 */
______


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

/**
 * Create a constructor function for the heroes.
 * Name: `Hero`
 * Properties: `name`, `role`, `maxHp`, `exp`
 * Question: `exp` is not taken from the inputs on index, how is it set?
 */
______

/**
 * Add the gainExp method on the `Hero`'s prototype.
 * The function has an `amount` parameter and this value is added to the `exp`.
 */
______

/**
 * Add the `engageInCombat` method on the `Hero`'s prototype.
 * The function generates a random number value and calls `gainExp`.
 * Question: how is the method invoked?
 *
 */
______


heroForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('hero-name').value;
  const role = document.getElementById('hero-role').value;
  const maxHp = Number(document.getElementById('hero-hp').value);

  /**
   * Core logic
   * Create the `Hero` object using the constructor function.
   * Add the hero on the `heroesDatabase` using the `nextHeroId` as key.
   * Remember to increase the `nextHeroId`.
   */
  ______

  heroForm.reset();
  renderTable();
});