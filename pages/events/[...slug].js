import { useRouter } from 'next/router';

const FilteredEventsPage = () => {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <div>
      <h1>Event Slug Page</h1>
    </div>
  );
};
export default FilteredEventsPage;
