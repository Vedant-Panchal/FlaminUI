"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CardDisplay from './CardDisplay';
import { ComponentCard } from '@/components/ui/ComponentCards/ComponentCard';
import { ChevronRight, Gift, SquareArrowOutUpRight } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "@components/Accordion/Accordion";
import Alert from "@components/Alert/Alert";
import AlertTitle from "@components/Alert/AlertTitle";
import AlertDescription from "@components/Alert/AlertDescription";
import Avatar from "@components/Avatar/Avatar";
import Button from '@components/Button/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardButton,
  CardBody,
  CardContainer,
  CardIcon,
  CardImage,
  CardLink,
  CardCustomer,
  CardRating,
} from "@components/Card/Card";
import Checkbox from "@components/Checkbox/Checkbox";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownContent,
  DropdownLabel,
} from "@components/Dropdown/Dropdown";
import { Input } from '@components/Input/Input';
import Radio from "@components/Radio/Radio";
import { TextArea } from "@components/TextArea/TextArea";
import { Toggle } from "@components/Toggle/Toggle";
import ToggleSwitch from './ToggleSwitch';

const Section: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = (checked: boolean) => {
    setSidebarVisible(checked);
  };

  return (
    <div className="md:flex-row md:items-start md:justify-start flex flex-col items-start justify-start relative">
      <div className={`relative ${sidebarVisible ? 'block' : 'hidden'} md:block`}>
        <Sidebar />
      </div>
      <div className={`md:hidden block sticky top-[125px] w-max h-max z-[1000] ${sidebarVisible ? "left-1/2" : "left-0"}`}>
        <ToggleSwitch onChange={toggleSidebar} />
      </div>
      <div className="flex-grow p-0 text-white md:ml-[240px] pt-28">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:w-full">
          <div id="Accordion" className="mb-6">
            <CardDisplay 
              title="Accordion" 
              description="An accordion component with expand/collapse functionality."
              buttonText="Try Now"
              buttonLink="/docs/accordion"
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Accordion variant="rounded" border={true} className='gap-2 w-full md:w-[400px]'>
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
              buttonText='Try Now'
              buttonLink='/docs/card'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
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
                          <SquareArrowOutUpRight className="ml-3 h-4 w-4 text-[#F65571] mt-2" />
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
              buttonText='Try Now'
              buttonLink='/docs/alert'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Alert dismissAfter={200000} className="w-full md:w-[400px]">
                <AlertTitle>This is alert title!</AlertTitle>
                <AlertDescription>This is alert description!</AlertDescription>
              </Alert>
            </CardDisplay>
          </div>
          <div id='Avatar' className='mb-6'>
            <CardDisplay
              title='Avatar'
              description='An avatar component to display user profile images.'
              buttonText='Try Now'
              buttonLink='/docs/avatar'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Avatar isRounded={false} location="top-right" />
              <Avatar status="online" />
            </CardDisplay>
          </div>
          <div id='Button' className='mb-6'>
            <CardDisplay
              title='Button'
              description='A button component to trigger actions.'
              buttonText='Try Now'
              buttonLink='/docs/button'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Button variant='success'>dont you dare</Button>
            </CardDisplay>
          </div>
          <div id='Checkbox' className='mb-6'>
            <CardDisplay
              title='Checkbox'
              description='A checkbox component to select options.'
              buttonText='Try Now'
              buttonLink='/docs/checkbox'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Checkbox label="Label" />
            </CardDisplay>
          </div>
          <div id='Dropdown' className='mb-6'>
            <CardDisplay
              title='Dropdown'
              description='A dropdown component to select options.'
              buttonText='Try Now'
              buttonLink='/docs/dropdown'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
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
              buttonText='Try Now'
              buttonLink='/docs/input'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Input
                placeholder="Enter some text"
                type="password"
                showIcon={true}
                variant="error"
                className="input-field"
              />
            </CardDisplay>
          </div>
          <div id='Radio' className='mb-6'>
            <CardDisplay
              title='Radio'
              description='A radio component to select options.'
              buttonText='Try Now'
              buttonLink='/docs/radio'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Radio label="Label" />
            </CardDisplay>
          </div>
          <div id='Textarea' className='mb-6'>
            <CardDisplay
              title='Textarea'
              description='A textarea component to enter multiple lines of text.'
              buttonText='Try Now'
              buttonLink='/docs/textarea'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <TextArea placeholder="Enter your text here..." variant="" />
            </CardDisplay>
          </div>
          <div id='Toggle' className='mb-6'>
            <CardDisplay
              title='Toggle'
              description='A toggle component to switch between two states.'
              buttonText='Try Now'
              buttonLink='/docs/toggle'
              buttonIcon={<ChevronRight className="h-6 w-6" />}
            >
              <Toggle label="Default Toggle" />
            </CardDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;