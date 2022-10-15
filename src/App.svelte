<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";

  export let url: string = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
</Router>
