import CareSubHero from '@/components/patientcare/CareSubHero';
import TallowBalm from '@/components/patientcare/TallowBalm';

export default function TallowBalmPage() {
  return (
    <>
      <CareSubHero
        tag="OUR AFTERCARE PRODUCT"
        title="Bonsai Health Honey Tallow Balm"
        intro="We don't recommend just any moisturizer. We chose Bonsai Health Honey Tallow Balm because we believe what goes on your skin after a session matters as much as the treatment itself."
      />
      <TallowBalm />
    </>
  );
}