import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Heading,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; // Caminho ajustado

function CadastramentoUsuarioPage() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/HomePageLogada'); 
  };

  return (
    <Header> {/* Header envolvendo todo o conteúdo */}
      <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading as="h2" size="lg" mb={6}>Cadastro de Usuário</Heading>
        <form>
          <VStack spacing={4}>
            <HStack spacing={4} width="100%">
              <FormControl id="nome" isRequired>
                <FormLabel>Nome</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="cargo">
                <FormLabel>Cargo</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl id="email" isRequired>
                <FormLabel>Email (Login)</FormLabel>
                <Input type="email" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl id="senha" isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="confirmaSenha" isRequired>
                <FormLabel>Confirma Senha</FormLabel>
                <Input type="password" />
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <FormControl id="perfil">
                <FormLabel>Perfil</FormLabel>
                <Select placeholder="Selecione o perfil">
                  <option value="gerente">Gestor</option>
                  <option value="gestor">Usuário</option>  
                </Select>
              </FormControl>
              <FormControl id="areaResponsavel" isRequired>
                <FormLabel>Área Responsável</FormLabel>
                <Select placeholder="Escolha a área">
                  <option value="asai">ASAI - Assessoria de Articulação Interinstitucional</option>
                  <option value="ascev">ASCEV - Assessoria de Cerimonial e Eventos</option>
                  <option value="asgp">ASGP - Assessoria de Gestão de Projetos</option>
                  <option value="asjur">ASJUR - Assessoria Jurídica</option>
                  <option value="aspti">ASPTI - Assessoria de Políticas de TI</option>
                  <option value="assi">ASSI - Assessoria de Segurança Institucional</option>
                  <option value="astec">ASTEC - Assessoria Técnica</option>
                  <option value="audin">AUDIN - Auditoria Interna</option>
                  <option value="bd">BD - Banco de Dados</option>
                  <option value="biblio">BIBLIO - Biblioteca</option>
                  <option value="calj">CALJ - Comissão de Acompanhamento Legislativo e Jurisprudência</option>
                  <option value="ccaf">CCAF - Comissão de Controle Administrativo e Financeiro</option>
                  <option value="cdef">CDEF - Comissão de Defesa dos Direitos Fundamentais</option>
                  <option value="cec">CEC - Comissão de Enfrentamento à Corrupção</option>
                  <option value="ces">CES - Comissão de Saúde</option>
                  <option value="cgdpp">CGDPP - Coordenadoria de Gestão de Diárias, Passagens e Passaportes</option>
                  <option value="cije">CIJE - Comissão da Infância, Juventude e Educação</option>
                  <option value="cma">CMA - Comissão do Meio Ambiente</option>
                  <option value="cmi">CMI</option>
                </Select>
              </FormControl>
            </HStack>
            <HStack spacing={4} width="100%">
              <Button colorScheme="red" background={'red.600'} type="submit" width="full">Cadastrar</Button>
              <Button colorScheme="red" background={'red.600'} type="button" width="full" onClick={handleCancel}>Cancelar</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Header>
  );
}

export default CadastramentoUsuarioPage;

