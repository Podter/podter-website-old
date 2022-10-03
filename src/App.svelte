<script lang="ts">
  import Icon from "@iconify/svelte";
  import constructionIcon from "@iconify/icons-fluent-emoji/construction";
  import { Confetti } from "svelte-confetti";

  interface ConfettiPosition {
    clientX: number;
    clientY: number;
  }

  let count: number = 0;
  let confettiPositions: ConfettiPosition[] = [];
  let timeout: NodeJS.Timeout;

  const confettiDuration = 2000;

  async function onClick(event: MouseEvent) {
    count++;
    const { clientX, clientY } = event;
    confettiPositions = [...confettiPositions, { clientX, clientY }];
    clearTimeout(timeout);
    timeout = setTimeout(() => (confettiPositions = []), confettiDuration);
  }
</script>

<div
  class="flex h-screen w-screen justify-center items-center bg-ctp-base ctp-mocha select-none"
  on:click={onClick}
>
  {#if count >= 20}
    <div class="absolute left-1/2 -top-3">
      <Confetti
        x={[-5, 5]}
        y={[0, 0.1]}
        delay={[500, 2000]}
        infinite
        duration="5000"
        amount="300"
        fallDistance="100vh"
      />
    </div>
  {/if}

  {#each confettiPositions as confettiPosition}
    <div
      class="absolute"
      style="left: {confettiPosition.clientX}px; top: {confettiPosition.clientY}px"
    >
      <Confetti y={[-0.5, 0.5]} {confettiDuration} />
    </div>
  {/each}

  <div class="block text-center text-ctp-text">
    <p class="text-6xl font-semibold">Under Construction</p>
    <p class="text-3xl mt-3 text-ctp-subtext">Coming soon!</p>
    <Icon icon={constructionIcon} width="128" height="128" />
    <p class="text-xl my-1">Podter</p>

    {#if count >= 10}
      <p
        class="text-xl mt-1 cursor-pointer hover:text-ctp-blue transition-colors duration-300"
        on:click={() => window.open("https://apil.podter.xyz/")}
      >
        Go to Apil's website
      </p>
    {/if}
  </div>
</div>
