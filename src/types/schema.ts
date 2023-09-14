export interface UserSearchResult {
  incomplete_results?: boolean;
  items: User[];
  total_count?: number;
}

/**
 * User Search Result Item
 */
export interface User {
  id: number;
  login: string;
}

export interface SearchResultTextMatch {
  fragment?: string;
  matches?: Match[];
  object_type?: null | string;
  object_url?: string;
  property?: string;
}

export interface Match {
  indices?: number[];
  text?: string;
}

export interface Repo {
  description: null | string;
  disabled: boolean;
  id: number;
  name: string;
  stargazers_count: number;
  url: string;
  visibility?: string;
}

export interface UserRepoResult {
  incomplete_results?: boolean;
  items: Repo[];
  total_count?: number;
}

export interface RepoSearchResultItem {
  allow_auto_merge?: boolean;
  allow_forking?: boolean;
  allow_merge_commit?: boolean;
  allow_rebase_merge?: boolean;
  allow_squash_merge?: boolean;
  archive_url: string;
  archived?: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url?: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at?: string | null;
  default_branch?: string;
  delete_branch_on_merge?: boolean;
  deployments_url: string;
  description: null | string;
  disabled?: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks?: number;
  forks_count?: number;
  forks_url?: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url?: string;
  has_discussions?: boolean;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_pages?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  homepage?: null | string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template?: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language?: null | string;
  languages_url?: string;
  license?: LicenseSimple | null;
  master_branch?: string;
  merges_url: string;
  milestones_url: string;
  mirror_url?: null | string;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues?: number;
  open_issues_count?: number;
  owner: null | SimpleUser;
  permissions?: Permissions;
  private: boolean;
  pulls_url: string;
  pushed_at?: null | string;
  releases_url: string;
  score?: number;
  size?: number;
  ssh_url?: string;
  stargazers_count?: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url?: string;
  tags_url: string;
  teams_url: string;
  temp_clone_token?: string;
  text_matches?: SearchResultTextMatch[];
  topics?: string[];
  trees_url: string;
  updated_at?: string | null;
  url: string;
  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
  watchers?: number;
  watchers_count?: number;
  web_commit_signoff_required?: boolean;
}

export interface SimpleUser {
  avatar_url: string;
  email?: null | string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: null | string;
  html_url: string;
  id: number;
  login: string;
  name?: null | string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_at?: string;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface Permissions {
  admin?: boolean;
  maintain?: boolean;
  pull?: boolean;
  push?: boolean;
  triage?: boolean;
}

export interface LicenseSimple {
  html_url?: string;
  key?: string;
  name?: string;
  node_id?: string;
  spdx_id?: null | string;
  url?: null | string;
}
