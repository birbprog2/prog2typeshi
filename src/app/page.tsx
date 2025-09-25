import Link from 'next/link'

const mockUrls = ["https://xc1syiu05k.ufs.sh/f/mnvr2oKlAF3bbbqrHQBsWz3lmTEbnDuqvyUPMp2IwkAHBGXh"]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#D4C5E2] to-[#48639C] text-white">
			<Link href="/layer02">next_page</Link>
			<div className="text-blue-500 text-center underline italic border-4 border-green-800 -rotate-180">
				<h1>
			this is blue birb
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


