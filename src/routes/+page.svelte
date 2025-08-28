<script lang="ts">
	import { onMount } from 'svelte';
  import { loadObfuscated } from '$lib/load-obfuscated'

  async function loadObfuscatedData() {
      const { contact } = await loadObfuscated()
      const contactTarget = document.querySelector('#contact')
      if (!!contactTarget && !!contact) {
        const anchor = contactTarget as HTMLAnchorElement
        anchor.innerHTML = contact
        anchor.href = `mailto:${contact}`
      }
  }

	onMount(loadObfuscatedData);
</script>

<h2>About</h2>
<p>
  Established in 2017, WAC Korp Ltd is a UK-based provider of software engineering consultancy services.
  Utilising lean software development practices we can rapidly provide value to your business.
</p>

<h2>Contact</h2>
<p>
  Email: <a id="contact" href="mailto:">[email protected]</a>
</p>

<style>
  h2:nth-of-type(1) {
    margin-top: 0;
  }

  h2 {
    margin-top: 3em;
  }

  p {
    line-height: 1.5em;
    margin: 2em 0;
  }

  a, a:visited, a:hover, a:active {
    color: #189;
  }
</style>
