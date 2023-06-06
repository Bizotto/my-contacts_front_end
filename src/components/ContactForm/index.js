import propTypes from 'prop-types';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select id="opcoes" name="opcoes">
          <option value="opcao1" disabled selected>
            Categories
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" onClick={() => {}}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
