<script lang="ts">
  import { asset } from '$app/paths'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" type="image/x-icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJsb2dvIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgY2xhc3M9InMtN0lQRjMyV2NxM3M4Ij48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI0VFRSIgcng9IjUwIiByeT0iNTAiIGNsYXNzPSJzLTdJUEYzMldjcTNzOCIvPjx0ZXh0IHg9IjM1IiB5PSIxNTAiIGZpbGw9IiMxODkiIGZvbnQtc2l6ZT0iMTBlbSIgZm9udC1mYW1pbHk9Ik1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9IjgwMCIgY2xhc3M9InMtN0lQRjMyV2NxM3M4Ij5XQUM8L3RleHQ+PHRleHQgeD0iNDAiIHk9IjI0MCIgZmlsbD0iIzE4OSIgZm9udC1zaXplPSI3ZW0iIGZvbnQtZmFtaWx5PSJNb25vc3BhY2UiIGZvbnQtd2VpZ2h0PSI4MDAiIGNsYXNzPSJzLTdJUEYzMldjcTNzOCI+S29ycDwvdGV4dD48L3N2Zz4=">
  <link rel="shortcut icon" type="image/x-icon" href={asset('/favicon.ico')}>
</svelte:head>

<main>
  <div class="center">
    <h1>WAC Korp Ltd</h1>
    {@render children?.()}
  </div>
</main>

<footer>
  <div class="center">
    <h3>Legal</h3>
    <p>
      Company registration number: <span>10833574</span>
      <br>
      VAT registration number: <span>271718103</span>
    </p>
    <h3>Registered company address</h3>
    <p>
      W8a Knoll Business Centre
      <br>
      325-327 Old Shoreham Road
      <br>
      Hove
      <br>
      England
      <br>
      BN3 7GS
    </p>
  </div>
</footer>

<style>
  :global(body) {
    /* background-color: #EEE; */
    color: #111;
    font-family: monospace;
    font-size: 1em;
    font-weight: 300;
    margin: 0;
    overscroll-behavior: none;
  }

  h1, h3 {
    margin-top: 0;
  }

  main {
    padding: 1em;
  }

  main h1 {
    color: #189;
    font-size: 5em;
    margin-bottom: 0.5em;
  }

  footer {
    background-color: #189;
    line-height: 1.5em;
    padding: 1em;
  }

  footer p {
    margin: 0;
  }

  footer h3 {
    font-size: 1em;
    font-weight: 600;
  }

  footer h3:nth-of-type(1) {
    margin-top: 0;
  }

  footer h3 {
    margin-top: 1em;
  }

  .center {
    margin: auto;
    max-width: 1200px;
  }
</style>
