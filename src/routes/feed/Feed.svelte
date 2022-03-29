<script>
  import FeedItem from '@/components/FeedItem.svelte';
</script>

<div class="w-1/2 h-full p-10 grid place-self-center">
  <ol class="relative border-l border-gray-200 dark:border-gray-700"> 

    <!-- INPUT TO POST SOMETHING -->
    <FeedItem 
      img="https://avatars.dicebear.com/api/adventurer-neutral/You.svg"
      myself={true}
    />   
      
    <FeedItem 
      img="https://avatars.dicebear.com/api/adventurer-neutral/Bonnie.svg"
      displayname="Bonnie"
      username="@bonnie"
      time="just now"  
    />
  
    <FeedItem
      img="https://avatars.dicebear.com/api/adventurer-neutral/Thomas.svg"
      displayname="Thomas Lean"
      username="@tholean"
      time="2 hours ago"
      content="Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement."
    />
  
  </ol>
</div>