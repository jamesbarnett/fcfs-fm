<script>
  import Card from './Card.svelte';
</script>
<main class="bg-neutral-lightgray px-8 py-20">
  <section class="pitch text-center pb-20">
    <h1 class="text-2xl font-light leading-loose sm:text-4xl">Reliable, efficient delivery</h1>
    <p class="text-2xl font-bold pb-4 sm:text-4xl">
      Powered by Technology
    </p>
    <p class="font-light leading-relaxed">Our Artificial Intelligence powered tools use millions of project data points 
      to ensure that your project is successful</p>
  </section>
  <section class="flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:items-center sm:max-w-[1000px] sm:mx-auto">
    <Card styles="sm:row-start-1 sm:row-span-2"
      name="Supervisor"
      blurb="Monitors activity to identify project roadblock"
      icon="./images/icon-supervisor.svg"
      accent="cyan"
    />
    <Card styles="sm:col-start-2"
      name="Team Builder"
      blurb="Scans our talent network to create the optimal team for your project"
      icon="./images/icon-team-builder.svg"
      accent="red"
    />
    <Card styles="sm:col-start-2"
      name="Karma"
      blurb="Regularly evaluates our talent to ensure quality"
      icon="./images/icon-karma.svg"
      accent="orange"
    />
    <Card styles="sm:col-start-3 sm:row-start-1 sm:row-span-2"
      name="Calculator"
      blurb="Uses data from past projects to provide better delivery estimates"
      icon="./images/icon-calculator.svg"
      accent="blue"
    />
  </section>
</main>

<style>
  .pitch {
    max-width: 72ch;
  }

@media (min-width: 72ch) {
  .pitch {
    margin-left: auto;
    margin-right: auto;
  } 
}
</style>
