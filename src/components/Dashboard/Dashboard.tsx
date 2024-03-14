import { Grid, Container, Paper, Text } from '@mantine/core';

export function Dashboard() {
  return (
    <Container my="sm">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              45
            </Text>
            <Text size="sm" ta="center">
              Current Job Listing
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              25
            </Text>
            <Text size="sm" ta="center">
              Bench Employees
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              67
            </Text>
            <Text size="sm" ta="center">
              Applicants
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              5
            </Text>
            <Text size="sm" ta="center">
              Onboarded Bench Employees
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              12
            </Text>
            <Text size="sm" ta="center">
              Onboarded Applicants
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              3
            </Text>
            <Text size="sm" ta="center">
              Offboarded Employees
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Paper shadow="lg" radius="lg" withBorder p="xl">
            <Text size="xl" ta="center" fw={700}>
              45
            </Text>
            <Text size="sm" ta="center">
              Current Job Listing
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
