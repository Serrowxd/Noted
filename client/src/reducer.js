// Components
import Navigation from './components/navbar';
import Cards from './components/cards';
import Notes from './components/notes';
import Daily from './components/daily';
import CalendarView from './components/calendar';
import Settings from './components/settings';
import Account from './components/account';
import EditNote from './components/editNote';
import CreateNote from './components/createNote';
import NewCard from './components/newCard';

// Containers
import Noteview from './containers/Noteview';
import Landing from './containers/Landing';
import ContainedView from './containers/containedview';

// Testing
import StateNotes from './containers/StateNotes';

// Styles
import {
  Container,
  Column,
  Row,
  StyledCard,
  CardContainer,
  Button,
  LandingRow,
  LandingRender,
  SignInput,
  Form,
} from './styles/styles';

export {
  // Containers
  Noteview,
  Landing,
  ContainedView,
  // Components
  Navigation,
  Cards,
  Notes,
  Daily,
  CalendarView,
  Settings,
  Account,
  EditNote,
  CreateNote,
  NewCard,
  // Styles
  Container,
  Column,
  Row,
  StyledCard,
  CardContainer,
  Button,
  LandingRow,
  LandingRender,
  SignInput,
  Form,
  // Test
  StateNotes,
};
