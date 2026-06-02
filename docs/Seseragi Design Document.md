# Seseragi Design Document

## Components


## Cards

A number of cards organized into a grid. A card contains a heading and a paragraph for title and description. Each "card" is contained by a SECTION element, which contains a H1 element for the heading and typically one P element containing the card text content. A card typically represents something clickable to another page.

## Article

A long form text consisting of headings and paragraphs.

## Flow

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



## Seseragi Notebooks

A Notebook consists of two sections, a notebook document and a stream of posts.

The Notebook Document is the document for a topic, a text associated with a tag, which develops over time.

Design features:

* Tags are presented in --seseragi-purple to make the connection between notebook and stream sections visually clear.

* Notebook sections are responsive, collapsing to a single column at 750px with the notebook document located above the stream of posts.

## Example Notebook

```HTML
<main>
  <section class="flow-wrap">
    <section class="flow-sticky notebook">
      <span class="tag">#transform</span>
      <h2>Transforming Conversations to Knowledge</h2>
      <p>...</p>
    </section>
    <section class="flow-scroll stream">
      <p>Post content <span class="tag">#transform</span></p>
      <p>Post content <span class="tag">#transform</span></p>
    </section>
  </section>

  <section class="flow-wrap">
    <section class="flow-sticky notebook">
      <span class="tag">#expertise</span>
      <h2>Capturing and Refining User Expertise</h2>
      <p>...</p>
    </section>
    <section class="flow-scroll stream">
      <p>Post content <span class="tag">#expertise</span></p>
    </section>
  </section>
</main>
```

