import { profile } from "@/components/portfolio-data";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Contact | Anshu Chandola",
	description: "Contact Anshu Chandola about full-stack development opportunities and collaborations.",
};

export default function ContactPage() {
	return (
		<main className="page-enter mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
			<section className="grid flex-1 content-start gap-12 border-b border-black/10 pb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3d8278]">Contact</p>
					<h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-tight text-neutral-950 sm:text-6xl">Let’s build something useful.</h1>
					<p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
						I’m seeking a full-stack development opportunity where I can strengthen my engineering fundamentals and contribute to practical software products.
					</p>
					<Button href={`mailto:${profile.email}`} className="mt-8">Email Anshu</Button>
				</div>
				<address className="not-italic">
					<dl className="divide-y divide-black/10 border-y border-black/10">
						<div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
							<dt className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Email</dt>
							<dd><a className="text-sm font-medium text-neutral-900 underline decoration-[#d8a14b] decoration-2 underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></dd>
						</div>
						<div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
							<dt className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Phone</dt>
							<dd><a className="text-sm font-medium text-neutral-900" href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a></dd>
						</div>
						<div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
							<dt className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Location</dt>
							<dd className="text-sm font-medium text-neutral-900">{profile.location}</dd>
						</div>
						<div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
							<dt className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">LinkedIn</dt>
							<dd><a className="break-all text-sm font-medium text-neutral-900 underline decoration-[#3d8278] underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/anshu-chandola-447957326</a></dd>
						</div>
						<div className="grid gap-2 py-5 sm:grid-cols-[130px_1fr]">
							<dt className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">GitHub</dt>
							<dd><a className="break-all text-sm font-medium text-neutral-900 underline decoration-[#3d8278] underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">github.com/anshucha94-collab</a></dd>
						</div>
					</dl>
				</address>
			</section>
		</main>
	);
}
