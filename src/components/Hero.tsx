import { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(1)
	const [hasClicked, setHasClicked] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [loadedVideos, setLoadedVideos] = useState(0)

	const totalvideos = 4
	const nextVideoRef = useRef(null)

	const upcomingVideoIndex = (currentIndex % totalvideos) + 1

	const getVideoSource = (index: number) => `videos/hero-${index}.mp4`

	const handleMiniVdClick = () => {
		setHasClicked(true)
		setCurrentIndex(upcomingVideoIndex)
	}

	const handleVideoLoad = () => {
		setLoadedVideos(prev => prev + 1)
	}

	return (
		<div className='relative h-dvh w-screen overflow-x-hidden'>
			<div
				id='video-frame'
				className='relative z-10 h-dvh bg-blue-75 w-screen overflow-hidden rounded-lg'>
				<div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer rounded-lg overflow-hidden'>
					<div className='origin-center' onClick={handleMiniVdClick}>
						<video
							loop
							muted
							id='current-video'
							className='scale-50 ease-in hover:scale-100 hover:opacity-100 duration-200 transition-all opacity-0 size-64 origin-center scale-150 object-cover object-center'
							ref={nextVideoRef}
							src={getVideoSource(upcomingVideoIndex)}
							onLoadedData={handleVideoLoad}
						/>
					</div>
				</div>
				<video
					ref={nextVideoRef}
					src={getVideoSource(currentIndex)}
					loop
					muted
					id='next-video'
					onLoadedData={handleVideoLoad}
					className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
				/>
				<video
					src={getVideoSource(
						currentIndex == totalvideos - 1 ? 1 : currentIndex
					)}
					autoPlay
					loop
					muted
					className='absolute left-0 top-0 size-full object-cover object-center'
					onLoadedData={handleVideoLoad}
				/>
				<h1 className='text-blue-75 special-font hero-heading absolute bottom-5 right-5 z-40'>
					G<b>a</b>ming
				</h1>
				<div className='absolute left-0 top-0 z-40 size-full'>
					<div className='mt-24 px-5 sm:px-10'>
						<h1 className='special-font hero-heading text-blue-100'>
							redefi<b>n</b>e
						</h1>
						<p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
							Enter the Metagame Layer
							<br />
							Unleash the Play Economy
						</p>
						<Button
							id='watch-trailer'
							title='Watch-Trailer'
							leftIcon={<TiLocationArrow />}
							containerClass='bg-yellow-300 flex-center gap-1'
						/>
					</div>
				</div>
			</div>
			{/* */}
			<h1 className='text-black special-font hero-heading absolute bottom-5 right-5'>
				G<b>a</b>ming
			</h1>
		</div>
	)
}

export default Hero
