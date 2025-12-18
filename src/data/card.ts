import SupervisorIcon from '../assets/icon-supervisor.svg';
import TbIcon from '../assets/icon-team-builder.svg';
import KarmaIcon from '../assets/icon-karma.svg';
import CalcIcon from '../assets/icon-calculator.svg';

export const card = 
[
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: SupervisorIcon,
    bgColor: 'bg-(--supervisor-b)'
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project ',
    icon: TbIcon,
    bgColor: 'bg-(--teamBuilder-b)'
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: KarmaIcon,
    bgColor: 'bg-(--karma-b)'
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    icon: CalcIcon,
    bgColor: 'bg-(--calc-b)'
  },
]