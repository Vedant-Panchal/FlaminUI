import React, { useState } from 'react';
import SimpleDropdown from './SimpleDropdown';
import { ComponentCard } from '@/components/ui/ComponentCards/ComponentCard';
import { Accordion, AccordionItem, AccordionButton, AccordionContent } from "@components/Accordion/Accordion";
import Alert from "@components/Alert/Alert";
import AlertTitle from "@components/Alert/AlertTitle";
import AlertDescription from "@components/Alert/AlertDescription";
import Avatar from '@/lib/components/Avatar/Avatar';
import Button from '@/lib/components/Button/Button';
import { Card, CardHeader, CardTitle, CardFooter, CardContainer, CardIcon, CardLink, CardBody } from "@components/Card/Card";
import { Gift, SquareArrowOutUpRight } from 'lucide-react';
import Checkbox from '@/lib/components/Checkbox/Checkbox';
import { Dropdown, DropdownButton, DropdownItem, DropdownContent, DropdownLabel } from "@components/Dropdown/Dropdown";
import { Input } from '@/lib/components/Input/Input';
import Radio from '@/lib/components/Radio/Radio';
import { TextArea } from '@/lib/components/TextArea/TextArea';
import { Toggle } from '@/lib/components/Toggle/Toggle';
import CodeCopy from '../CodePreview/CodeCopy';
import { componentStyles } from './styles';

const ComponentSelect: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleSelectComponent = (component: string) => {
    setSelectedComponent(component);
    setSelectedStyle(null); // Reset style selection when component changes
  };

  const handleSelectStyle = (style: string) => {
    setSelectedStyle(style);
  };

  const renderComponent = () => {
    let code = '';

    switch (selectedComponent) {
      case 'Accordion':
        code = `
          import { Accordion, AccordionItem, AccordionButton, AccordionContent } from "@components/Accordion/Accordion";
          
          function AccordionDemo() {
            return (
              <Accordion variant="${selectedStyle || 'default'}" border={true} className="gap-2 w-full md:w-[400px]">
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
            );
          }
        `;
        return (
          <div id="Accordion" className="mb-6 p-6 flex flex-col">
            <ComponentCard>
              <Accordion variant={selectedStyle || 'default'} border={true} className="gap-2 w-full md:w-[400px]">
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
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Alert':
        code = `
          import Alert from "@components/Alert/Alert";
          import AlertTitle from "@components/Alert/AlertTitle";
          import AlertDescription from "@components/Alert/AlertDescription";
          
          function AlertDemo() {
            return (
              <Alert dismissAfter={200000} className="w-full md:w-[400px] ${selectedStyle || ''}">
                <AlertTitle>This is alert title!</AlertTitle>
                <AlertDescription>This is alert description!</AlertDescription>
              </Alert>
            );
          }
        `;
        return (
          <div id='Alert' className='mb-6'>
            <ComponentCard>
              <Alert dismissAfter={200000} className={`w-full md:w-[400px] ${selectedStyle || ''}`}>
                <AlertTitle>This is alert title!</AlertTitle>
                <AlertDescription>This is alert description!</AlertDescription>
              </Alert>
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Avatar':
        code = `
          import Avatar from '@/lib/components/Avatar/Avatar';
          
          function AvatarDemo() {
            return <Avatar isRounded={false} location="top-right" />;
          }
        `;
        return (
          <div id='Avatar' className='mb-6'>
            <ComponentCard>
              <Avatar isRounded={false} location="top-right" />
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Button':
        code = `
          import Button from '@/lib/components/Button/Button';
          
          function ButtonDemo() {
            return <Button variant="${selectedStyle || 'default'}">Click me</Button>;
          }
        `;
        return (
          <div id='Button' className='mb-6'>
            <ComponentCard>
              <Button variant={selectedStyle || 'default'}>Click me</Button>
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Card':
        code = `
          import { Card, CardHeader, CardTitle, CardFooter, CardContainer, CardIcon, CardLink, CardBody } from "@components/Card/Card";
          import { Gift, SquareArrowOutUpRight } from 'lucide-react';
          
          function CardDemo() {
            return (
              <Card className="${selectedStyle || ''}">
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
            );
          }
        `;
        return (
          <div id='Card' className='mb-6'>
            <ComponentCard>
              <Card className={selectedStyle || ''}>
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
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Checkbox':
        code = `
          import Checkbox from '@/lib/components/Checkbox/Checkbox';
          
          function CheckboxDemo() {
            return <Checkbox label="Checkbox" />;
          }
        `;
        return (
          <div id='Checkbox' className='mb-6'>
            <ComponentCard>
              <Checkbox label="Checkbox" />
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
        case 'Dropdown':
        code = `
          import { Dropdown, DropdownButton, DropdownItem, DropdownContent, DropdownLabel } from "@components/Dropdown/Dropdown";
          
          function DropdownDemo() {
            return (
              <Dropdown>
                <DropdownButton defaultText="Select an option" />
                  <DropdownContent>
                    <DropdownLabel>Options</DropdownLabel>
                    <DropdownItem value="Option 1">Option 1</DropdownItem>
                    <DropdownItem value="Option 2">Option 2</DropdownItem>
                    <DropdownItem value="Option 3">Option 3</DropdownItem>
                  </DropdownContent>
              </Dropdown>
            );
          }
        `;
        return (
          <div id='Dropdown' className='mb-6'>
            <ComponentCard>
            <Dropdown>
                <DropdownButton defaultText="Select an option" />
                  <DropdownContent>
                    <DropdownLabel>Options</DropdownLabel>
                    <DropdownItem value="Option 1">Option 1</DropdownItem>
                    <DropdownItem value="Option 2">Option 2</DropdownItem>
                    <DropdownItem value="Option 3">Option 3</DropdownItem>
                  </DropdownContent>
              </Dropdown>
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Input':
        code = `
          import { Input } from '@/lib/components/Input/Input';
          
          function InputDemo() {
            return <Input placeholder="Enter some text" type="password" showIcon={true} variant="${selectedStyle || 'default'}" className="input-field" />;
          }
        `;
        return (
          <div id='Input' className='mb-6'>
            <ComponentCard>
              <Input placeholder="Enter some text" type="password" showIcon={true} variant={selectedStyle || 'default'} className="input-field" />
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Radio':
        code = `
          import { Radio } from '@lib/components/Radio/Radio';

          function RadioDemo() {  
            return <Radio label="Label" />
          }
        `;
        return (
          <div id='Radio' className='mb-6'>
            <ComponentCard>
              <Radio varaint={selectedStyle || 'default'} label="Label" />
            </ComponentCard>
          </div>
        )
      case 'Textarea':
        code = `
          import { TextArea } from '@/lib/components/TextArea/TextArea';
          
          function TextAreaDemo() {
            return <TextArea placeholder="Enter some text" variant="${selectedStyle || 'default'}" className="input-field" />;
          }
        `;
        return (
          <div id='Textarea' className='mb-6'>
            <ComponentCard>
              <TextArea placeholder="Enter some text" variant={selectedStyle || 'default'} className="input-field" />
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      case 'Toggle':
        code = `
          import { Toggle } from '@/lib/components/Toggle/Toggle';
          
          function ToggleDemo() {
            return <Toggle />;
          }
        `;
        return (
          <div id='Toggle' className='mb-6'>
            <ComponentCard>
              <Toggle label="Default Toggle"/>
            </ComponentCard>
            <div className="mt-4 p-4 rounded-lg max-w-[700px]">
              <CodeCopy code={code} language="jsx" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const options = [
    { label: 'Select a component', value: '' },
    { label: 'Accordion', value: 'Accordion' },
    { label: 'Alert', value: 'Alert' },
    { label: 'Avatar', value: 'Avatar' },
    { label: 'Button', value: 'Button' },
    { label: 'Card', value: 'Card' },
    { label: 'Checkbox', value: 'Checkbox' },
    { label: 'Dropdown', value: 'Dropdown' },
    { label: 'Input', value: 'Input' },
    { label: 'Radio', value: 'Radio' },
    { label: 'Textarea', value: 'Textarea' },
    { label: 'Toggle', value: 'Toggle' },
  ];

  return (
    <div className="p-4 text-white rounded">
      <SimpleDropdown options={options} onSelect={handleSelectComponent} />
      {selectedComponent && (
        <SimpleDropdown
          options={componentStyles[selectedComponent] || []}
          onSelect={handleSelectStyle}
        />
      )}
      <div className="component-display mt-4">{renderComponent()}</div>
    </div>
  );
};

export default ComponentSelect;
