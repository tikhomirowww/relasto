import React, { FC, useState } from 'react';

import SearchIcon from '../../assets/icons/search-grey.svg';
import AgentCard from '../../components/AgentCard';
import ContainerLayout from '../../components/ContainerLayout';
import { agentMockData } from '../../mocks/agentCardMock';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Pagination from '../../ui/Pagination';
import SelectInput from '../../ui/SelectInput';
import styles from '../AgentsPage/AgentsPage.module.scss';

const AgentsPage: FC = () => {
  const [address, setAddress] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handlePageChange = (selectedPage: React.SetStateAction<number>) => {
    setCurrentPage(selectedPage);
  };
  const options = [
    { value: 'rating', label: 'Review' },
    { value: 'name', label: 'Name' },
  ];
  return (
    <ContainerLayout>
      <div className={styles.main}>
        <h1>Some Nearby Good Agents</h1>
        <div className={styles.search}>
          <Input
            onChange={handleAddressChange}
            placeholder="Enter your address"
            type="text"
            value={address}
            postfixIcon={<SearchIcon />}
            width="415px"
          />
          <SelectInput options={options} className={styles.select} value={options} />
          <Button>Search</Button>
        </div>
        <div className={styles.cards}>
          {agentMockData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            total={agentMockData.length}
            limit={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AgentsPage;
