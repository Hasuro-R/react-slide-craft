import type { Meta, StoryObj } from '@storybook/react'
import { Codeblock } from '../../../components/codeblock/Codeblock'

const meta: Meta<typeof Codeblock> = {
  title: 'Components/Items/Codeblock',
  component: Codeblock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'typescript', 'python', 'java', 'cpp', 'html', 'css', 'json', 'bash', 'yaml'],
    },
    theme: {
      control: 'select',
      options: ['defaultStyle', 'dracula', 'github', 'vs', 'atomOneDark', 'monokai', 'tomorrow', 'solarizedDark', 'nord', 'gruvboxDark'],
    },
    windowControlStyle: {
      control: 'select',
      options: ['default', 'transparency', 'none'],
    },
    cornerRadius: {
      control: 'text',
    },
    dropShadow: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Codeblock>

export default meta
type Story = StoryObj<typeof meta>

const javascriptCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55`

const pythonCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quicksort(left) + middle + quicksort(right)

print(quicksort([3, 6, 8, 10, 1, 2, 1]))`

const typescriptCode = `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }
}

const userService = new UserService();`

const htmlCode = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Slide Craft</title>
</head>
<body>
    <div id="root">
        <h1>Hello, World!</h1>
        <p>これはサンプルHTMLです。</p>
    </div>
</body>
</html>`

const jsonCode = `{
  "name": "react-slide-craft",
  "version": "1.0.0",
  "description": "A powerful React library for creating presentations",
  "main": "dist/index.js",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  }
}`

export const Default: Story = {
  args: {
    children: javascriptCode,
    language: 'javascript',
    theme: 'defaultStyle',
  },
}

export const JavaScript: Story = {
  args: {
    children: javascriptCode,
    language: 'javascript',
    theme: 'atomOneDark',
  },
}

export const TypeScript: Story = {
  args: {
    children: typescriptCode,
    language: 'typescript',
    theme: 'dracula',
  },
}

export const Python: Story = {
  args: {
    children: pythonCode,
    language: 'python',
    theme: 'monokai',
  },
}

export const HTML: Story = {
  args: {
    children: htmlCode,
    language: 'html',
    theme: 'github',
  },
}

export const JSON: Story = {
  args: {
    children: jsonCode,
    language: 'json',
    theme: 'vs',
  },
}

export const DarkTheme: Story = {
  args: {
    children: javascriptCode,
    language: 'javascript',
    theme: 'gruvboxDark',
  },
}

export const LightTheme: Story = {
  args: {
    children: javascriptCode,
    language: 'javascript',
    theme: 'tomorrow',
  },
}

export const NoWindowControls: Story = {
  args: {
    children: pythonCode,
    language: 'python',
    theme: 'nord',
    windowControlStyle: 'none',
  },
}

export const TransparencyWindowControls: Story = {
  args: {
    children: typescriptCode,
    language: 'typescript',
    theme: 'solarizedDark',
    windowControlStyle: 'transparency',
  },
}

export const CustomCornerRadius: Story = {
  args: {
    children: javascriptCode,
    language: 'javascript',
    theme: 'atomOneDark',
    cornerRadius: '2rem',
  },
}

export const NoDropShadow: Story = {
  args: {
    children: pythonCode,
    language: 'python',
    theme: 'dracula',
    dropShadow: false,
  },
}

export const ShortCode: Story = {
  args: {
    children: `console.log("Hello, World!");`,
    language: 'javascript',
    theme: 'github',
  },
}

export const LongCode: Story = {
  args: {
    children: `// 複雑なReactコンポーネントの例
import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, Form, Input, Table, Space, message } from 'antd';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      message.error('ユーザーの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSubmit = async (values: any) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, values);
        message.success('ユーザーを更新しました');
      } else {
        await createUser(values);
        message.success('ユーザーを作成しました');
      }
      setModalVisible(false);
      fetchUsers();
    } catch (error) {
      message.error('操作に失敗しました');
    }
  };

  return (
    <div>
      <Button onClick={() => setModalVisible(true)}>
        新規ユーザー作成
      </Button>
      <Table
        dataSource={users}
        loading={loading}
        columns={[
          { title: '名前', dataIndex: 'name' },
          { title: 'メール', dataIndex: 'email' },
          { title: '役割', dataIndex: 'role' },
        ]}
      />
    </div>
  );
};`,
    language: 'typescript',
    theme: 'atomOneDark',
  },
}