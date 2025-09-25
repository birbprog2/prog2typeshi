import Link from 'next/link'

const mockUrls = ["https://xc1syiu05k.ufs.sh/f/mnvr2oKlAF3bEHH8Ab9ntFfe9AhQjKrk0sxXBagyWpmzcY83"]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function Layer2Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FFFFC7] to-[#FFC100] text-white">
			<Link href="..">next_page</Link>
			<div className="text-yellow-500 text-center underline italic border-4 border-red-800 -rotate-180">
				<h1>
			this is yellow birb
				</h1>	
				{
      			mockImages.map((image) => (
        	<div key ={image.id} className="w-48">
          	<img src={image.url} alt="image" />
        	</div>
      			))
    			}
    		</div>
		</main>
	);
}

