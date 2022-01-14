import { useRef } from 'react';
import Button from '../ui/Button';

const EventSearch = (props) => {
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);

  const handleFilter = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form
      onSubmit={handleFilter}
      className='max-w-3xl mx-auto flex flex-wrap items-center justify-around mt-8 py-8 px-4 rounded-lg bg-pink-300 shadow-xl drop-shadow-2xl shadow-pink-200'
    >
      <div className='basis-2/5'>
        <label className='block md:inline-block mr-4' htmlFor='year'>
          Year
        </label>
        <select ref={yearInputRef} className='w-[180px] p-2 cursor-pointer' name='year' id='year'>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>

      <div className='basis-2/5'>
        <label className='mr-4' htmlFor='month'>
          Month
        </label>
        <select ref={monthInputRef} className='w-[180px] p-2 cursor-pointer' name='month' id='month'>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
      </div>
      <Button className='basis-2/5 md:basis-1/5 mt-8 md:mt-0'>Search</Button>
    </form>
  );
};

export default EventSearch;
