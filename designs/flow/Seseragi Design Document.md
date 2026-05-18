# Seseragi Design Document

## Homepage

The homepage typically contains "card" content organized into a grid.

Each "card" is contained by a SECTION element, which contains a H1 element for the heading and typically one P element containing the card text content.

SECTION
    H1
    P



```HTML
<div class="card-grid">
	<section class="card">
        <h1>A wonderful serenity</h1>
        <p><span class="drop-cap with-circle">A</span> wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was.</p>
	</section>
</div>
```



Example CSS for cards:

```CSS
/* Cards */
section.card h1 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.6rem;
  line-height: 1.35;
  color: var(--seseragi-text-color);
}

section.card p {
  font-size: 0.9rem;
  line-height: var(--body-line-height);
  color: var(--seseragi-text-color);
}
```

The grid defines the column layout for the cards.

The grid styles should not define colors, fonts or properties other than ones specifying spatial organization.

```CSS
/* --layout-margin: auto;
 */

display: grid;
grid-gap: 25px;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
margin: var(--layout-margin);
```
