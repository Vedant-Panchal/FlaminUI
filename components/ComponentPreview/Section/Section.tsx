import React from 'react';
import Sidebar from './Sidebar';
import { Accordion, AccordionItem, Button, Card, Checkbox, Input, Radio, TextArea, Toggle } from '@/lib';
import { AccordionButton, AccordionContent } from '@/lib/components/Accordion/Accordion';
import Alert from '@/lib/components/Alert/Alert';
import AlertDescription from '@/lib/components/Alert/AlertDescription';
import AlertTitle from '@/lib/components/Alert/AlertTitle';
import Avatar from '@/lib/components/Avatar/Avatar';
import CardDisplay from './CardDisplay';
import { ComponentCard } from '@/components/ui/ComponentCards/ComponentCard';
import { CardBody } from '@/lib/components/Card/CardBody';
import { CardContainer } from '@/lib/components/Card/CardContainer';
import { CardHeader } from '@/lib/components/Card/CardHeader';
import { CardTitle } from '@/lib/components/Card/CardTitle';
import { CardButton } from '@/lib/components/Card/CardButton';
import { CardFooter } from '@/lib/components/Card/CardFooter';
import { CardImage } from '@/lib/components/Card/CardImage';
import { Gift, MoveRight, SquareArrowOutUpRight } from 'lucide-react';
import { CardIcon } from '@/lib/components/Card/CardIcon';
import { CardLink } from '@/lib/components/Card/CardLink';
import { Dropdown } from '@/lib/components/Dropdown/Dropdown';
import DropdownButton from '@/lib/components/Dropdown/DropdownButton';
import DropdownContent from '@/lib/components/Dropdown/DropdownContent';
import DropdownItem from '@/lib/components/Dropdown/DropdownItem';
import DropdownLabel from '@/lib/components/Dropdown/DropdownLabel';

const Section1: React.FC = () => {
  return (
    <div className="flex mt-28">
      <Sidebar />
      <div className="flex-grow p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="Accordion" className="mb-6">
            <CardDisplay 
              title="Accordion" 
              description="An accordion component with expand/collapse functionality."
              buttonText="Learn More"
              buttonLink="/docs/accordion"
            >
              <Accordion variant="rounded" border={true}>
                <AccordionItem index={0}>
                  <AccordionButton>Section 1</AccordionButton>
                  <AccordionContent>Content for section 1</AccordionContent>
                </AccordionItem>
                <AccordionItem index={1}>
                  <AccordionButton>Section 2</AccordionButton>
                  <AccordionContent>Content for section 2</AccordionContent>
                </AccordionItem>
                <AccordionItem index={2}>
                  <AccordionButton>Section 3</AccordionButton>
                  <AccordionContent>Content for section 3</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardDisplay>
          </div>
          <div id='Card' className='mb-6'>
            <CardDisplay
              title='CardDisplay'
              description='A CardDisplay component to display content.'
              buttonText='Learn More'
              buttonLink='/docs/card'
            >
              <ComponentCard>
                <Card>
                  <CardContainer>
                        <CardHeader>
                            <CardIcon>
                                <Gift className="h-10 w-10" />
                            </CardIcon>
                            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
                        </CardHeader>
                        <CardBody>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit...
                        </CardBody>
                        <CardFooter>
                            <CardLink href={"/backgrounds"} className="cursor-pointer flex flex-row items-center">
                              <p>See your guidelines</p>
                              <CardIcon>
                                <SquareArrowOutUpRight className="ml-3 h-4 w-4 text-primary-550 mt-2" />
                              </CardIcon>
                            </CardLink>
                        </CardFooter>
                    </CardContainer>
                </Card>
            </ComponentCard>
            </CardDisplay>
          </div>
          <div id='Alert' className='mb-6'>
            <CardDisplay
              title='Alert'
              description='An alert component to display messages.'
              buttonText='Learn More'
              buttonLink='/docs/alert'
            >
              <Alert dismissAfter={200000}>
                <AlertTitle>This is alert title!</AlertTitle>
                <AlertDescription>This is alert description!</AlertDescription>
              </Alert>
            </CardDisplay>
          </div>
          <div id='Avatar' className='mb-6'>
            <CardDisplay
              title='Avatar'
              description='An avatar component to display user profile images.'
              buttonText='Learn More'
              buttonLink='/docs/avatar'
            >
              <Avatar
                isRounded={false}
                location="top-right"
              />
              <Avatar status="online"/>
            </CardDisplay>
          </div>
          <div id='Button' className='mb-6'>
            <CardDisplay
              title='Button'
              description='A button component to trigger actions.'
              buttonText='Learn More'
              buttonLink='/docs/button'
            >
              <Button variant='success'>dont you dare</Button>
            </CardDisplay>
          </div>
          <div id='Checkbox' className='mb-6'>
            <CardDisplay
              title='Checkbox'
              description='A checkbox component to select options.'
              buttonText='Learn More'
              buttonLink='/docs/checkbox'
            >
              <Checkbox label="Label" />
            </CardDisplay>
          </div>
          <div id='Dropdown' className='mb-6'>
            <CardDisplay
              title='Dropdown'
              description='A dropdown component to select options.'
              buttonText='Learn More'
              buttonLink='/docs/dropdown'
            >
              <Dropdown>
                <DropdownButton defaultText="Select an option" />
                <DropdownContent>
                  <DropdownLabel>Options</DropdownLabel>
                  <DropdownItem value="Option 1">Option 1</DropdownItem>
                  <DropdownItem value="Option 2">Option 2</DropdownItem>
                  <DropdownItem value="Option 3">Option 3</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </CardDisplay>
          </div>
          <div id='Input' className='mb-6'>
            <CardDisplay
              title='Input'
              description='An input component to enter data.'
              buttonText='Learn More'
              buttonLink='/docs/input'
            >
              <ComponentCard>
                <Input
                  placeholder="Enter some text"
                  type="password"
                  showIcon={true}
                  variant="error"
                  className="input-field"
                />
              </ComponentCard>
            </CardDisplay>
          </div>
          <div id='Radio' className='mb-6'>
            <CardDisplay
              title='Radio'
              description='A radio component to select options.'
              buttonText='Learn More'
              buttonLink='/docs/radio'
            >
              <Radio label="Label" />
            </CardDisplay>
          </div>
          <div id='Textarea' className='mb-6'>
            <CardDisplay
              title='Textarea'
              description='A textarea component to enter multiple lines of text.'
              buttonText='Learn More'
              buttonLink='/docs/textarea'
            >
              <TextArea placeholder="Enter your text here..." variant="" />
            </CardDisplay>
          </div>
          <div id='Toggle' className='mb-6'>
            <CardDisplay
              title='Toggle'
              description='A toggle component to switch between two states.'
              buttonText='Learn More'
              buttonLink='/docs/toggle'
            >
              <Toggle label="Default Toggle" />
            </CardDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
