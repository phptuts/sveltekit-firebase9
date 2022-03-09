<script context="module">
	import { getBooks } from '../db';

	export async function load() {
		try {
			const books = await getBooks();

			return {
				props: {
					books
				}
			};
		} catch (e) {
			return {
				status: 500,
				error: new Error('Error Fetching Data From Firebase')
			};
		}
	}
</script>

<script>
	export let books = [];
</script>

<h1>Books Are Awesome</h1>

<ul>
	{#each books as book}
		<li>{book.title} / {book.author}</li>
	{/each}
</ul>
