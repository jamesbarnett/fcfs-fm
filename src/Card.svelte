<script>
  export let name = undefined;
  export let blurb = undefined;
  export let icon = undefined;
  export let accent = undefined;
  export let styles = undefined;
</script>

<div class="card rounded-md bg-[white] w-full mx-auto sm:max-w-[50rem] shadow-xl shadow-slate-300 px-8 py-8 sm:justify-center {styles}" data-accent={accent}>
  <h2 class="text-xl font-bold pb-4">{name}</h2>
  <p class="font-light text-sm leading-relaxed sm:text-[0.875rem]">{blurb}</p>
  <img class="ms-auto mt-8" height="64" width="64" src={icon} alt="" /> 
</div> 

<style>
  .card[data-accent="cyan"] {
    border-top-color: var(--clr-cyan);
  }
  .card[data-accent="red"] {
    border-top-color: var(--clr-red);
  }
  .card[data-accent="orange"] {
    border-top-color: var(--clr-orange);
  }
  .card[data-accent="blue"] {
    border-top-color: var(--clr-blue);
  }

  .card {
    max-width: 22rem;
    border-top: 4px solid;
  }

  @media (min-width: 22rem) {
    .card {
      margin-left: auto;
      margin-right: auto;
    } 
  }
</style>
