import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  VStack,
  Heading,
} from '@chakra-ui/react';
import Header from '../../components/Header';

const FormGroup = ({ label, children }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    {children}
  </FormControl>
);

const AdminPage = () => {
  // Estado para armazenar a quantidade de componentes e as descrições
  const [quantidadeComponentes, setQuantidadeComponentes] = useState('');
  const [componentes, setComponentes] = useState([]);

  // Função para atualizar a quantidade de componentes
  const handleQuantidadeChange = (e) => {
    const value = parseInt(e.target.value, 10);

    // Se não for um número válido, definimos como vazio
    if (isNaN(value) || value < 0) {
      setQuantidadeComponentes('');
      setComponentes([]); // Limpa os componentes caso a entrada seja invalidada
    } else {
      setQuantidadeComponentes(value);

      // Ajustar o array de componentes conforme o número de campos necessários
      const newComponentes = Array(value)
        .fill('')
        .map((_, index) => componentes[index] || ''); // Preserva os valores existentes, se houver
      setComponentes(newComponentes);
    }
  };

  // Função para atualizar a descrição de um componente específico
  const handleComponentChange = (index, value) => {
    const newComponentes = [...componentes];
    newComponentes[index] = value;
    setComponentes(newComponentes);
  };

  const renderGeneralTab = () => (
    <VStack spacing={4} align="stretch">
      {/* POSICIONAMENTO NO MAPA ESTRATÉGICO */}
      <Heading as="h2" size="lg">Posicionamento no Mapa Estratégico</Heading>
      <FormGroup label="Código do Indicador">
        <Input type="text" id="codigoIndicador" name="codigoIndicador" />
      </FormGroup>
      <FormGroup label="Nome do Indicador">
        <Input type="text" id="nomeIndicador" name="nomeIndicador" />
      </FormGroup>
      <FormGroup label="Objetivo Estratégico Associado">
        <Input type="text" id="objetivoEstrategico" name="objetivoEstrategico" />
      </FormGroup>
      <FormGroup label="Perspectiva Estratégica">
        <Input type="text" id="perspectivaEstrategica" name="perspectivaEstrategica" />
      </FormGroup>
      <FormGroup label="Descrição do Objetivo Estratégico">
        <Textarea id="descricaoObjetivoEstrategico" name="descricaoObjetivoEstrategico" />
      </FormGroup>

      {/* INFORMAÇÕES GERAIS */}
      <Heading as="h2" size="lg">Informações Gerais</Heading>
      <FormGroup label="Descrição do Indicador">
        <Textarea id="descricaoIndicador" name="descricaoIndicador" />
      </FormGroup>
      <FormGroup label="Finalidade do Indicador">
        <Textarea id="finalidadeIndicador" name="finalidadeIndicador" />
      </FormGroup>
      <FormGroup label="Dimensão do Desempenho">
        <Select id="dimensaoDesempenho" name="dimensaoDesempenho">
          <option value="E1">Efetividade (E1)</option>
          <option value="E2">Eficácia (E2)</option>
          <option value="E3">Eficiência (E3)</option>
          <option value="E4">Execução (E4)</option>
          <option value="E5">Excelência (E5)</option>
          <option value="E6">Economicidade (E6)</option>
        </Select>
      </FormGroup>
      <FormGroup label="Quantidade de Componentes da Fórmula">
        <Input 
          type="number" 
          id="quantidadeComponentes" 
          name="quantidadeComponentes" 
          value={quantidadeComponentes} 
          onChange={handleQuantidadeChange}
          placeholder="Digite o número de componentes"
        />
      </FormGroup>

      {/* Renderizar campos de descrição dos componentes com base na quantidade */}
      {Array.from({ length: quantidadeComponentes }).map((_, index) => (
        <FormGroup key={index} label={`Descrição do Componente ${index + 1}`}>
          <Textarea
            value={componentes[index] || ''}
            onChange={(e) => handleComponentChange(index, e.target.value)}
            placeholder={`Descrição do Componente ${index + 1}`}
          />
        </FormGroup>
      ))}

      <FormGroup label="Fórmula">
        <Input type="text" id="formula" name="formula" />
      </FormGroup>
      <FormGroup label="Fonte/Forma de Coleta dos Dados">
        <Textarea id="fonteFormaColeta" name="fonteFormaColeta" />
      </FormGroup>
      <FormGroup label="Peso do Indicador">
        <Input type="number" id="pesoIndicador" name="pesoIndicador" />
      </FormGroup>
      <FormGroup label="Interpretação do Indicador/Recomendações">
        <Textarea id="interpretacaoIndicador" name="interpretacaoIndicador" />
      </FormGroup>
      <FormGroup label="Área Responsável">
        <Input type="text" id="areaResponsavel" name="areaResponsavel" />
      </FormGroup>

      {/* DESEMPENHO */}
      <Heading as="h2" size="lg">Desempenho</Heading>
      <FormGroup label="Meta">
        <Input type="number" id="meta" name="meta" />
      </FormGroup>
      <FormGroup label="Tipos de Acumulação">
        <Select id="tiposAcumulacao" name="tiposAcumulacao">
          <option value="saldo">Saldo</option>
          <option value="soma">Soma</option>
          <option value="media">Média</option>
        </Select>
      </FormGroup>
      <FormGroup label="Polaridade">
        <Select id="polaridade" name="polaridade">
          <option value="negativa">Negativa</option>
          <option value="positiva">Positiva</option>
          <option value="estavel">Estável</option>
        </Select>
      </FormGroup>
      <FormGroup label="Periodicidade de Coleta">
        <Select id="periodicidadeColeta" name="periodicidadeColeta">
          <option value="mensal">Mensal</option>
          <option value="bimestral">Bimestral</option>
          <option value="trimestral">Trimestral</option>
          <option value="quadrimestral">Quadrimestral</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
          <option value="bianual">Bianual</option>
          <option value="trianual">Trianual</option>
        </Select>
      </FormGroup>
      <FormGroup label="Frequência da Meta">
        <Select id="frequenciaMeta" name="frequenciaMeta">
          <option value="mensal">Mensal</option>
          <option value="bimestral">Bimestral</option>
          <option value="trimestral">Trimestral</option>
          <option value="quadrimestral">Quadrimestral</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
          <option value="bianual">Bianual</option>
          <option value="trianual">Trianual</option>
        </Select>
      </FormGroup>
      <FormGroup label="Unidade de Medida">
        <Input type="text" id="unidadeMedida" name="unidadeMedida" />
      </FormGroup>
      
      <Button colorScheme="red" background={'red.600'} type="submit">Salvar</Button>
    </VStack>
  );

  return (
    <Header>
      <Box p={4}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab
              sx={{
                _selected: {
                  color: 'red',
                  backgroundColor: '0',
                },
                _hover: {
                  backgroundColor: 'gray.300',
                  cursor: 'pointer',
                },
              }}
            >
              Geral
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{renderGeneralTab()}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Header>
  );
};

export default AdminPage;
