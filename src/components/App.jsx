import { Section } from './Section/Section';
import { Containers } from './Containers/Container';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';



export const App = () => {
  return(
    <Section>
      <Containers title={'Phonebook'}>
        <Form />
      </Containers>
      <Containers title={'Filter'}>
        <Filter/>
      </Containers>
      <Containers title={'Contacts'}>
        <Contacts/>
      </Containers>
    </Section>
  );
}; 
