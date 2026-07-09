import Marquee from '../components/Marquee';

const companies = [
  { name: 'Amazon', src: '' },
  { name: 'Apple', src: 'https://cdn.simpleicons.org/apple/111111' },
  { name: 'Microsoft', src: '' },
  { name: 'Uber', src: 'https://cdn.simpleicons.org/uber/111111' },
  { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal/111111' },
  { name: 'Google', src: 'https://cdn.simpleicons.org/google/111111' },
  { name: 'Netflix', src: 'https://cdn.simpleicons.org/netflix/111111' },
  { name: 'Disney', src: '' }
];

export default function OurLearnersWorkIn() {
  return (
    <section className="py-20 md:py-24 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="container-x mb-14 text-center">
        <div className="eyebrow justify-center flex text-[var(--charcoal)]">Our Learners Work In</div>
      </div>
      <Marquee items={companies} />
    </section>
  );
}
