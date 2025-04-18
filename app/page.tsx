import {
	SignedIn,
	SignedOut,
	SignIn,
	UserButton,
} from '@clerk/nextjs'

export default function HomePage() {
	return (
		<main className=''>
			<h1>Welcome to Homepage!</h1>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignIn />
			</SignedOut>
		</main>
	)
}
